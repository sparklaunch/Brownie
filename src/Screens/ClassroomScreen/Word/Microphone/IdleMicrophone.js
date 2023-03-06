import { useRecoilState } from "recoil";
import wordMicrophoneStateAtom from "../../../../Stores/Classroom/Word/wordMicrophoneState";
import axios from "axios";
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

const IdleMicrophone = () => {
  const { level } = useParams();
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  const [wordMicrophoneState, setWordMicrophoneState] = useRecoilState(
    wordMicrophoneStateAtom
  );
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const [wordResultsShown, setWordResultsShown] =
    useRecoilState(wordResultsShownAtom);
  const [resultsScreenShown, setResultsScreenShown] = useRecoilState(
    resultsScreenShownAtom
  );
  const [wordScores, setWordScores] = useRecoilState(wordScoresAtom);
  const [audioDuration, setAudioDuration] = useRecoilState(audioDurationAtom);
  const words = useData("words");
  const [mediaRecorder, setMediaRecorder] = useRecoilState(mediaRecorderAtom);
  const recordVoice = async () => {
    try {
      const microphoneOnAudio = new Howl({
        src: ["/assets/audio/microphone_on.wav"]
      });
      microphoneOnAudio.play();
      mediaRecorder.start();
      setWordMicrophoneState("recording");
      mediaRecorder.ondataavailable = (event) => {
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
        axios
          .post(`${Constants.ELA_API_ENDPOINT}/pron_v2/`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Access-Control-Allow-Headers": "*",
              "X-API-KEY": Constants.API_KEY
            }
          })
          .then((response) => {
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
          })
          .catch((error) => {
            const stringError = JSON.stringify(error, null, 2);
            console.log(stringError);
          });
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
  const onClickMicrophone = () => {
    recordVoice();
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
