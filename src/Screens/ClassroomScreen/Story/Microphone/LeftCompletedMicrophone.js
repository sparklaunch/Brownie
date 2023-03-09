import { useRecoilValue, useSetRecoilState } from "recoil";
import highlightedPageAtom from "../../../../Stores/Classroom/Story/highlightedPage";
import currentPageAtom from "../../../../Stores/Classroom/Story/currentPage";
import uuid from "react-uuid";
import centralMicrophoneStateAtom from "../../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import useData from "../../../../Hooks/useData";
import scoresAtom from "../../../../Stores/Classroom/Story/scores";
import totalScoreAtom from "../../../../Stores/Classroom/Story/totalScore";
import { useParams } from "react-router-dom";
import resultsScreenShownAtom from "../../../../Stores/Classroom/Story/resultsScreenShown";
import audioDurationAtom from "../../../../Stores/Classroom/audioDuration";
import highlightVisibleAtom from "../../../../Stores/Classroom/Story/highlightVisible";
import {
  LeftCompletedMicrophoneContainer,
  MyVoiceButton,
  MyVoiceButtonContainer,
  RetryButton,
  RetryButtonContainer
} from "./LeftCompletedMicrophoneStyles";
import Constants from "../../../../Utilities/Constants";
import Swal from "sweetalert2";
import { Howl, Howler } from "howler";
import mediaRecorderAtom from "../../../../Stores/Misc/mediaRecorder";
import playMicrophoneOnAudio from "../../../../Utilities/playMicrophoneOnAudio";
import { elaAxios } from "../../../../Utilities/AxiosInstances";

const LeftCompletedMicrophone = () => {
  const { level } = useParams();
  const setResultsScreenShown = useSetRecoilState(resultsScreenShownAtom);
  const audioDuration = useRecoilValue(audioDurationAtom);
  const setHighlightedPage = useSetRecoilState(highlightedPageAtom);
  const currentPage = useRecoilValue(currentPageAtom);
  const setCentralMicrophoneState = useSetRecoilState(
    centralMicrophoneStateAtom
  );
  const setTotalScore = useSetRecoilState(totalScoreAtom);
  const setScores = useSetRecoilState(scoresAtom);
  const sentences = useData("sentences");
  const setHighlightVisible = useSetRecoilState(highlightVisibleAtom);
  const mediaRecorder = useRecoilValue(mediaRecorderAtom);
  const recordVoice = async () => {
    try {
      await playMicrophoneOnAudio(); // 마이크 온 음원을 재생합니다.
      mediaRecorder.start(); // 녹음을 시작합니다.
      setCentralMicrophoneState("invisible");
      mediaRecorder.ondataavailable = async (event) => {
        // 녹음이 완료되고, 녹음본이 재생 가능한 상태일 경우,
        const blob = new Blob([event.data], { type: "audio/wav" }); // 녹음본을 blob 형태로 변환합니다.
        const reader = new FileReader(); // blob 형태의 녹음본을 base64 형태로 변환합니다.
        reader.readAsDataURL(blob); // base64 형태로 변환합니다.
        reader.onloadend = () => {
          // base64 형태로 변환된 녹음본을 localStorage에 저장합니다.
          const base64Record = reader.result;
          localStorage.setItem("left_record", base64Record);
        };
        const formData = new FormData();
        formData.append("text", sentences[currentPage - 1]); // 현재 페이지의 문장을 formData에 추가합니다.
        formData.append("student_audio", event.data); // 녹음본을 formData에 추가합니다.
        const response = await elaAxios.post("/pron_v2/", formData); // 서버에 formData를 전송합니다.
        setHighlightVisible(false);
        const record = localStorage.getItem("left_record");
        const leftRecord = new Howl({
          src: [record]
        });
        leftRecord.play(); // 녹음본을 재생합니다.
        const stringResponse = JSON.stringify(response, null, 2);
        console.log(stringResponse);
        const totalScore = response.data.total_score;
        setTotalScore({
          score: totalScore,
          id: uuid()
        }); // 총 점수를 저장합니다.
        setScores((previous) => {
          return {
            ...previous,
            [`${level}-${currentPage}`]: totalScore
          };
        }); // 현재 페이지의 점수를 저장합니다.
        setResultsScreenShown(true);
      };
      setTimeout(() => {
        // 녹음이 완료되면,
        mediaRecorder.stop(); // 녹음을 중지합니다.
        setCentralMicrophoneState("loading");
      }, audioDuration);
    } catch (error) {
      switch (error.message) {
        case "Requested device not found": // 마이크가 없을 경우,
          await Swal.fire(Constants.MICROPHONE_NOT_FOUND);
          break;
        case "Permission denied": // 마이크 사용 권한이 없을 경우,
          await Swal.fire(Constants.MICROPHONE_PERMISSION_DENIED);
          break;
        default: // 그 외의 오류가 발생할 경우,
          await Swal.fire(Constants.MICROPHONE_EXCEPTION);
          break;
      }
    }
  };
  const onClickRetry = async () => {
    // 다시하기 버튼을 누를 경우,
    Howler.unload(); // Howler를 초기화합니다.
    setHighlightedPage(currentPage);
    setHighlightVisible(true);
    setResultsScreenShown(false);
    setScores((previousScores) => {
      return {
        ...previousScores,
        [`${level}-${currentPage}`]: undefined
      };
    }); // 현재 페이지의 점수를 undefined로 초기화합니다.
    await recordVoice(); // 녹음을 다시 시작합니다.
  };
  const onClickMyVoice = () => {
    // 내 목소리 듣기 버튼을 누를 경우,
    Howler.unload(); // Howler를 초기화합니다.
    const leftRecord = localStorage.getItem("left_record"); // localStorage에 저장된 녹음본을 가져옵니다.
    const leftRecordAudio = new Howl({
      src: [leftRecord]
    });
    leftRecordAudio.play(); // 녹음본을 재생합니다.
  };
  return (
    <LeftCompletedMicrophoneContainer>
      <RetryButtonContainer onClick={onClickRetry}>
        <RetryButton
          src={`/assets/images/retry_button.svg`}
          alt={`Retry Button`}
        />
      </RetryButtonContainer>
      <MyVoiceButtonContainer onClick={onClickMyVoice}>
        <MyVoiceButton
          src={`/assets/images/my_voice_button.svg`}
          alt={`My Voice Button`}
        />
      </MyVoiceButtonContainer>
    </LeftCompletedMicrophoneContainer>
  );
};

export default LeftCompletedMicrophone;
