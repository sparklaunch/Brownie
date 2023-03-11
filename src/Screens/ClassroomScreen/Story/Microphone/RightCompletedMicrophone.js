import { useRecoilValue, useSetRecoilState } from "recoil";
import highlightedPageAtom from "../../../../Stores/Classroom/Story/highlightedPage";
import currentPageAtom from "../../../../Stores/Classroom/Story/currentPage";
import uuid from "react-uuid";
import centralMicrophoneStateAtom from "../../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import useData from "../../../../Hooks/useData";
import totalScoreAtom from "../../../../Stores/Classroom/Story/totalScore";
import scoresAtom from "../../../../Stores/Classroom/Story/scores";
import { useParams } from "react-router-dom";
import resultsScreenShownAtom from "../../../../Stores/Classroom/Story/resultsScreenShown";
import audioDurationAtom from "../../../../Stores/Classroom/audioDuration";
import highlightVisibleAtom from "../../../../Stores/Classroom/Story/highlightVisible";
import {
  MyVoiceButton,
  MyVoiceButtonContainer,
  RetryButton,
  RetryButtonContainer,
  RightCompletedMicrophoneContainer
} from "./RightCompletedMicrophoneStyles";
import Constants from "../../../../Utilities/Constants";
import Swal from "sweetalert2";
import { Howl, Howler } from "howler";
import mediaRecorderAtom from "../../../../Stores/Misc/mediaRecorder";
import playMicrophoneOnAudio from "../../../../Utilities/playMicrophoneOnAudio";
import { elaAxios } from "../../../../Utilities/AxiosInstances";

const RightCompletedMicrophone = () => {
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
      await playMicrophoneOnAudio(); // 마이크 온 효과음을 재생합니다.
      mediaRecorder.start(); // 녹음을 시작합니다.
      setCentralMicrophoneState("invisible");
      mediaRecorder.ondataavailable = async (event) => {
        // 녹음이 끝나면 실행됩니다.
        const blob = new Blob([event.data], { type: "audio/wav" }); // 녹음한 데이터를 blob으로 변환합니다.
        const reader = new FileReader(); // blob을 base64로 변환합니다.
        reader.readAsDataURL(blob); // base64로 변환합니다.
        reader.onloadend = () => {
          // base64로 변환한 데이터를 로컬 스토리지에 저장합니다.
          const base64Record = reader.result;
          localStorage.setItem("right_record", base64Record);
        };
        const formData = new FormData();
        formData.append("text", sentences[currentPage]); // 현재 페이지의 문장을 FormData에 추가합니다.
        formData.append("student_audio", event.data); // 녹음한 데이터를 FormData에 추가합니다.
        const response = await elaAxios.post("/pron_v2/", formData); // 서버에 녹음한 데이터를 전송합니다.
        setHighlightVisible(false);
        const record = localStorage.getItem("right_record");
        const rightRecord = new Howl({
          src: [record]
        });
        rightRecord.play(); // 녹음한 데이터를 재생합니다.
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
            [`${level}-${currentPage + 1}`]: totalScore
          };
        }); // 현재 오른쪽 페이지의 점수를 저장합니다.
        setResultsScreenShown(true); // 결과 화면을 보여줍니다.
      };
      setTimeout(() => {
        // 녹음 시간이 지나면 녹음을 멈춥니다.
        mediaRecorder.stop();
        setCentralMicrophoneState("loading");
      }, audioDuration);
    } catch (error) {
      switch (error.message) {
        case "Requested device not found": // 마이크를 찾을 수 없을 때
          await Swal.fire(Constants.MICROPHONE_NOT_FOUND);
          break;
        case "Permission denied": // 마이크 사용 권한이 없을 때
          await Swal.fire(Constants.MICROPHONE_PERMISSION_DENIED);
          break;
        default: // 그 외의 오류
          await Swal.fire(Constants.MICROPHONE_EXCEPTION);
          break;
      }
    }
  };
  const onClickRetry = async () => {
    // 다시하기 버튼을 눌렀을 때
    Howler.unload(); // 오디오를 멈춥니다.
    setHighlightedPage(currentPage + 1);
    setHighlightVisible(true);
    setResultsScreenShown(false);
    setScores((previousScores) => {
      return {
        ...previousScores,
        [`${level}-${currentPage + 1}`]: undefined
      };
    }); // 현재 오른쪽 페이지의 점수를 지웁니다.
    await recordVoice(); // 녹음을 다시 시작합니다.
  };
  const onClickMyVoice = () => {
    // 내 목소리 듣기 버튼을 눌렀을 때
    Howler.unload(); // 오디오를 멈춥니다.
    const rightRecord = localStorage.getItem("right_record");
    const rightRecordAudio = new Howl({
      src: [rightRecord]
    });
    rightRecordAudio.play(); // 녹음한 데이터를 재생합니다.
  };
  return (
    <RightCompletedMicrophoneContainer>
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
    </RightCompletedMicrophoneContainer>
  );
};

export default RightCompletedMicrophone;
