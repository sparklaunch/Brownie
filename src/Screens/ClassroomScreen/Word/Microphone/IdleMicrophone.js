import { useRecoilValue, useSetRecoilState } from "recoil";
import wordMicrophoneStateAtom from "../../../../Stores/Classroom/Word/wordMicrophoneState";
import uuid from "react-uuid";
import totalScoreAtom from "../../../../Stores/Classroom/Story/totalScore";
import audioDurationAtom from "../../../../Stores/Classroom/audioDuration";
import wordResultsShownAtom from "../../../../Stores/Classroom/Word/wordResultsShown";
import useData from "../../../../Hooks/useData";
import resultsScreenShownAtom from "../../../../Stores/Classroom/Story/resultsScreenShown";
import wordScoresAtom from "../../../../Stores/Classroom/Word/wordScores";
import { useParams } from "react-router-dom";
import currentWordPageAtom from "../../../../Stores/Classroom/Word/currentWordPage";
import Constants from "../../../../Utilities/Constants";
import Swal from "sweetalert2";
import {
  IdleMicrophoneContainer,
  IdleMicrophoneImage,
  InnerCircle,
  OuterCircle,
  Wave
} from "./IdleMicrophoneStyles";
import { Howl } from "howler";
import mediaRecorderAtom from "../../../../Stores/Misc/mediaRecorder";
import playMicrophoneOnAudio from "../../../../Utilities/playMicrophoneOnAudio";
import { elaAxios } from "../../../../Utilities/AxiosInstances";

const IdleMicrophone = () => {
  const { level } = useParams();
  const setTotalScore = useSetRecoilState(totalScoreAtom);
  const setWordMicrophoneState = useSetRecoilState(wordMicrophoneStateAtom);
  const currentWordPage = useRecoilValue(currentWordPageAtom);
  const setWordResultsShown = useSetRecoilState(wordResultsShownAtom);
  const setResultsScreenShown = useSetRecoilState(resultsScreenShownAtom);
  const setWordScores = useSetRecoilState(wordScoresAtom);
  const audioDuration = useRecoilValue(audioDurationAtom);
  const words = useData("words");
  const mediaRecorder = useRecoilValue(mediaRecorderAtom);
  const recordVoice = async () => {
    try {
      await playMicrophoneOnAudio(); // 마이크 온 사운드 재생
      mediaRecorder.start(); // 녹음 시작
      setWordMicrophoneState("recording");
      mediaRecorder.ondataavailable = async (event) => {
        // 녹음 데이터가 사용 가능할 때,
        const blob = new Blob([event.data], { type: "audio/wav" }); // 녹음 데이터를 blob으로 변환
        const reader = new FileReader(); // blob을 base64로 변환하기 위한 reader
        reader.readAsDataURL(blob); // blob을 base64로 변환
        reader.onloadend = () => {
          // base64로 변환 완료 시,
          const base64Record = reader.result;
          localStorage.setItem("record", base64Record);
        };
        const formData = new FormData();
        formData.append("text", words[currentWordPage - 1]); // 단어를 FormData에 추가합니다.
        formData.append("student_audio", event.data); // 녹음 데이터를 FormData에 추가합니다.
        const response = await elaAxios.post(`/pron_v2/`, formData); // 서버에 녹음 데이터를 전송합니다.
        const stringResponse = JSON.stringify(response, null, 2);
        console.log(stringResponse);
        const totalScore = response.data.total_score;
        setTotalScore({
          score: totalScore,
          id: uuid()
        }); // 점수를 전역 상태에 저장합니다.
        setWordScores((previous) => {
          return {
            ...previous,
            [`${level}-${currentWordPage}`]: totalScore
          };
        }); // 점수를 단어별 점수 전역 상태에 저장합니다.
        const userRecord = localStorage.getItem("record");
        const userRecordAudio = new Howl({
          src: [userRecord]
        });
        userRecordAudio.play(); // 사용자 녹음 재생
        setResultsScreenShown(true);
        setWordResultsShown(true);
        setWordMicrophoneState("completed");
      };
      setTimeout(() => {
        // 녹음 시간이 지나면,
        mediaRecorder.stop(); // 녹음을 중지합니다.
        setWordMicrophoneState("loading");
      }, audioDuration);
    } catch (error) {
      switch (error.message) {
        case "Requested device not found": // 마이크가 없을 때,
          await Swal.fire(Constants.MICROPHONE_NOT_FOUND);
          break;
        case "Permission denied": // 마이크 권한이 없을 때,
          await Swal.fire(Constants.MICROPHONE_PERMISSION_DENIED);
          break;
        default: // 그 외의 오류가 발생했을 때,
          await Swal.fire(Constants.MICROPHONE_EXCEPTION);
          break;
      }
    }
  };
  const onClickMicrophone = async () => {
    await recordVoice();
  };
  return (
    <IdleMicrophoneContainer onClick={onClickMicrophone}>
      <>
        <OuterCircle />
        <InnerCircle />
        <Wave />
      </>
      <IdleMicrophoneImage
        src={`/assets/images/icons/microphone_idle.svg`}
        alt={"Microphone"}
      />
    </IdleMicrophoneContainer>
  );
};

export default IdleMicrophone;
