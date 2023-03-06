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
        const response = await elaAxios.post(`/pron_v2/`, formData);
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
