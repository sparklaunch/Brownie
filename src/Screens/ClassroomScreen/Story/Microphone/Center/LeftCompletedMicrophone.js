import { useRecoilState } from "recoil";
import highlightedPageAtom from "../../../../../Stores/Classroom/Story/highlightedPage";
import currentPageAtom from "../../../../../Stores/Classroom/Story/currentPage";
import axios from "axios";
import uuid from "react-uuid";
import centralMicrophoneStateAtom from "../../../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import useData from "../../../../../Hooks/useData";
import scoresAtom from "../../../../../Stores/Classroom/Story/scores";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";
import { useParams } from "react-router-dom";
import resultsScreenShownAtom from "../../../../../Stores/Classroom/Story/resultsScreenShown";
import audioDurationAtom from "../../../../../Stores/Classroom/audioDuration";
import highlightVisibleAtom from "../../../../../Stores/Classroom/Story/highlightVisible";
import {
  LeftCompletedMicrophoneContainer,
  MyVoiceButton,
  MyVoiceButtonContainer,
  RetryButton,
  RetryButtonContainer
} from "./LeftCompletedMicrophoneStyles";
import Constants from "../../../../../Utilities/Constants";
import Swal from "sweetalert2";

const LeftCompletedMicrophone = () => {
  const { level } = useParams();
  const [resultsScreenShown, setResultsScreenShown] = useRecoilState(
    resultsScreenShownAtom
  );
  const [audioDuration, setAudioDuration] = useRecoilState(audioDurationAtom);
  const [highlightedPage, setHighlightedPage] =
    useRecoilState(highlightedPageAtom);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  const [scores, setScores] = useRecoilState(scoresAtom);
  const sentences = useData("sentences");
  const [highlightVisible, setHighlightVisible] =
    useRecoilState(highlightVisibleAtom);
  const recordVoice = async () => {
    try {
      const device = await navigator.mediaDevices.getUserMedia({
        audio: true
      });
      const sound = new Audio("/assets/audio/microphone_on.wav");
      sound.play();
      const recorder = new MediaRecorder(device);
      recorder.start();
      setCentralMicrophoneState("invisible");
      recorder.ondataavailable = (event) => {
        const blob = new Blob([event.data], { type: "audio/wav" });
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64Record = reader.result;
          localStorage.setItem("left_record", base64Record);
        };
        const formData = new FormData();
        formData.append("text", sentences[currentPage - 1]);
        formData.append("student_audio", event.data);
        axios
          .post(`${Constants.ELA_API_ENDPOINT}/pron_v2/`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              "x-cors-api-key": "temp_e4ec220dbf44f09c113217921d9d34d6",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
              "X-API-KEY": Constants.API_KEY
            }
          })
          .then((response) => {
            setHighlightVisible(false);
            const record = localStorage.getItem("left_record");
            new Audio(record).play();
            const stringResponse = JSON.stringify(response, null, 2);
            console.log(stringResponse);
            const totalScore = response.data.total_score;
            setTotalScore({
              score: totalScore,
              id: uuid()
            });
            setScores((previous) => {
              return {
                ...previous,
                [`${level}-${currentPage}`]: totalScore
              };
            });
            setResultsScreenShown(true);
          })
          .catch((error) => {
            const stringError = JSON.stringify(error, null, 2);
            console.log(stringError);
          });
      };
      setTimeout(() => {
        recorder.stop();
        setCentralMicrophoneState("loading");
      }, audioDuration);
    } catch (error) {
      switch (error.message) {
        case "Requested device not found":
          Swal.fire(Constants.MICROPHONE_NOT_FOUND);
          break;
        case "Permission denied":
          Swal.fire(Constants.MICROPHONE_PERMISSION_DENIED);
          break;
        default:
          Swal.fire(Constants.MICROPHONE_EXCEPTION);
          break;
      }
    }
  };
  const onClickRetry = () => {
    setHighlightedPage(currentPage);
    recordVoice();
  };
  const onClickMyVoice = () => {
    const leftRecord = localStorage.getItem("left_record");
    const audio = new Audio(leftRecord);
    audio.play();
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
