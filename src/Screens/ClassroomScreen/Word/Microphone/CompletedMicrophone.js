import currentWordPageAtom from "../../../../Stores/Classroom/Word/currentWordPage";
import uuid from "react-uuid";
import { useRecoilState } from "recoil";
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
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const [audioDuration, setAudioDuration] = useRecoilState(audioDurationAtom);
  const [wordMicrophoneState, setWordMicrophoneState] = useRecoilState(
    wordMicrophoneStateAtom
  );
  const [resultsScreenShown, setResultsScreenShown] = useRecoilState(
    resultsScreenShownAtom
  );
  const [wordScores, setWordScores] = useRecoilState(wordScoresAtom);
  const words = useData("words");
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  const [wordResultsShown, setWordResultsShown] =
    useRecoilState(wordResultsShownAtom);
  const [mediaRecorder, setMediaRecorder] = useRecoilState(mediaRecorderAtom);
  const recordVoice = async () => {
    try {
      await playMicrophoneOnAudio();
      mediaRecorder.start();
      setWordMicrophoneState("recording");
      mediaRecorder.ondataavailable = async (event) => {
        const blob = new Blob([event.data], { type: "audio/wav" });
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64Record = reader.result;
          localStorage.setItem("record", base64Record);
        };
        const formData = new FormData();
        formData.append("text", words[currentWordPage - 1]);
        formData.append("student_audio", event.data);
        const response = await elaAxios.post("/pron_v2/", formData);
        const stringResponse = JSON.stringify(response, null, 2);
        console.log(stringResponse);
        const totalScore = response.data.total_score;
        setTotalScore({
          score: totalScore,
          id: uuid()
        });
        setWordScores((previous) => {
          return {
            ...previous,
            [`${level}-${currentWordPage}`]: totalScore
          };
        });
        const userRecord = localStorage.getItem("record");
        const userRecordAudio = new Howl({
          src: [userRecord]
        });
        userRecordAudio.play();
        setResultsScreenShown(true);
        setWordResultsShown(true);
        setWordMicrophoneState("completed");
      };
      setTimeout(() => {
        mediaRecorder.stop();
        setWordMicrophoneState("loading");
      }, audioDuration);
    } catch (error) {
      switch (error.message) {
        case "Requested device not found":
          await Swal.fire(Constants.MICROPHONE_NOT_FOUND);
          break;
        case "Permission denied":
          await Swal.fire(Constants.MICROPHONE_PERMISSION_DENIED);
          break;
        default:
          await Swal.fire(Constants.MICROPHONE_EXCEPTION);
          break;
      }
    }
  };
  const onClickRetry = () => {
    Howler.unload();
    setResultsScreenShown(false);
    setWordScores((previousScores) => {
      return {
        ...previousScores,
        [`${level}-${currentWordPage}`]: undefined
      };
    });
    recordVoice();
  };
  const onClickMyVoice = () => {
    Howler.unload();
    const myVoice = localStorage.getItem("record");
    const myVoiceAudio = new Howl({
      src: [myVoice]
    });
    myVoiceAudio.play();
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
