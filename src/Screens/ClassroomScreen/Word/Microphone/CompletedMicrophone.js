import currentWordPageAtom from "../../../../Stores/Classroom/Word/currentWordPage";
import uuid from "react-uuid";
import { useRecoilValue, useSetRecoilState } from "recoil";
import audioDurationAtom from "../../../../Stores/Classroom/audioDuration";
import wordMicrophoneStateAtom from "../../../../Stores/Classroom/Word/wordMicrophoneState";
import useData from "../../../../Hooks/useData";
import totalScoreAtom from "../../../../Stores/Classroom/Story/totalScore";
import wordResultsShownAtom from "../../../../Stores/Classroom/Word/wordResultsShown";
import resultsScreenShownAtom from "../../../../Stores/Classroom/Story/resultsScreenShown";
import wordScoresAtom from "../../../../Stores/Classroom/Word/wordScores";
import { useParams } from "react-router-dom";
import {
  CompletedMicrophoneContainer,
  MyVoiceButton,
  RetryButton
} from "./CompletedMicrophoneStyles";
import Constants from "../../../../Utilities/Constants";
import Swal from "sweetalert2";
import { Howl, Howler } from "howler";
import mediaRecorderAtom from "../../../../Stores/Misc/mediaRecorder";
import playMicrophoneOnAudio from "../../../../Utilities/playMicrophoneOnAudio";
import { elaAxios } from "../../../../Utilities/AxiosInstances";

const CompletedMicrophone = () => {
  const { level } = useParams();
  const currentWordPage = useRecoilValue(currentWordPageAtom);
  const audioDuration = useRecoilValue(audioDurationAtom);
  const setWordMicrophoneState = useSetRecoilState(wordMicrophoneStateAtom);
  const setResultsScreenShown = useSetRecoilState(resultsScreenShownAtom);
  const setWordScores = useSetRecoilState(wordScoresAtom);
  const words = useData("words");
  const setTotalScore = useSetRecoilState(totalScoreAtom);
  const setWordResultsShown = useSetRecoilState(wordResultsShownAtom);
  const mediaRecorder = useRecoilValue(mediaRecorderAtom);
  const recordVoice = async () => {
    try {
      await playMicrophoneOnAudio(); // 마이크 온 효과음을 재생합니다.
      mediaRecorder.start(); // 녹음을 시작합니다.
      setWordMicrophoneState("recording");
      mediaRecorder.ondataavailable = async (event) => {
        // 녹음이 끝나면 실행됩니다.
        const blob = new Blob([event.data], { type: "audio/wav" }); // 녹음한 데이터를 blob으로 변환합니다.
        const reader = new FileReader(); // blob을 base64로 변환합니다.
        reader.readAsDataURL(blob); // base64로 변환합니다.
        reader.onloadend = () => {
          // base64로 변환한 데이터를 로컬 스토리지에 저장합니다.
          const base64Record = reader.result;
          localStorage.setItem("record", base64Record);
        };
        const formData = new FormData();
        formData.append("text", words[currentWordPage - 1]); // 단어를 FormData에 추가합니다.
        formData.append("student_audio", event.data); // 녹음한 데이터를 FormData에 추가합니다.
        const response = await elaAxios.post("/pron_v2/", formData); // 서버에 데이터를 전송합니다.
        const stringResponse = JSON.stringify(response, null, 2);
        console.log(stringResponse);
        const totalScore = response.data.total_score;
        setTotalScore({
          score: totalScore,
          id: uuid()
        }); // 점수를 저장합니다.
        setWordScores((previous) => {
          return {
            ...previous,
            [`${level}-${currentWordPage}`]: totalScore
          };
        }); // 점수를 저장합니다.
        const userRecord = localStorage.getItem("record");
        const userRecordAudio = new Howl({
          src: [userRecord]
        });
        userRecordAudio.play(); // 사용자의 녹음을 재생합니다.
        setResultsScreenShown(true);
        setWordResultsShown(true);
        setWordMicrophoneState("completed");
      };
      setTimeout(() => {
        // 녹음이 끝나면 실행됩니다.
        mediaRecorder.stop();
        setWordMicrophoneState("loading");
      }, audioDuration);
    } catch (error) {
      switch (error.message) {
        case "Requested device not found": // 마이크를 찾을 수 없을 때 실행됩니다.
          await Swal.fire(Constants.MICROPHONE_NOT_FOUND);
          break;
        case "Permission denied": // 마이크 사용 권한이 없을 때 실행됩니다.
          await Swal.fire(Constants.MICROPHONE_PERMISSION_DENIED);
          break;
        default: // 그 외의 오류가 발생했을 때 실행됩니다.
          await Swal.fire(Constants.MICROPHONE_EXCEPTION);
          break;
      }
    }
  };
  const onClickRetry = async () => {
    Howler.unload();
    setResultsScreenShown(false);
    setWordScores((previousScores) => {
      return {
        ...previousScores,
        [`${level}-${currentWordPage}`]: undefined
      };
    }); // 점수를 초기화합니다.
    await recordVoice(); // 녹음을 다시 시작합니다.
  };
  const onClickMyVoice = () => {
    Howler.unload();
    const myVoice = localStorage.getItem("record");
    const myVoiceAudio = new Howl({
      src: [myVoice]
    });
    myVoiceAudio.play(); // 사용자의 녹음을 재생합니다.
  };
  return (
    <CompletedMicrophoneContainer>
      <RetryButton
        src={`/assets/images/retry_button.svg`}
        alt={`Retry Button`}
        onClick={onClickRetry}
      />
      <MyVoiceButton
        src={`/assets/images/my_voice_button.svg`}
        alt={`My Voice Button`}
        onClick={onClickMyVoice}
      />
    </CompletedMicrophoneContainer>
  );
};

export default CompletedMicrophone;
