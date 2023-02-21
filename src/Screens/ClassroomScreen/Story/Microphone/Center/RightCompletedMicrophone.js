import { useRecoilState } from "recoil";
import highlightedPageAtom from "../../../../../Stores/Classroom/Story/highlightedPage";
import currentPageAtom from "../../../../../Stores/Classroom/Story/currentPage";
import axios from "axios";
import uuid from "react-uuid";
import centralMicrophoneStateAtom from "../../../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import useData from "../../../../../Hooks/useData";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";
import scoresAtom from "../../../../../Stores/Classroom/Story/scores";
import { useParams } from "react-router-dom";
import resultsScreenShownAtom from "../../../../../Stores/Classroom/Story/resultsScreenShown";
import audioDurationAtom from "../../../../../Stores/Classroom/audioDuration";
import highlightVisibleAtom from "../../../../../Stores/Classroom/Story/highlightVisible";
import {
  MyVoiceButton,
  MyVoiceButtonContainer,
  RetryButton,
  RetryButtonContainer,
  RightCompletedMicrophoneContainer
} from "./RightCompletedMicrophoneStyles";
import Constants from "../../../../../Utilities/Constants";

const RightCompletedMicrophone = () => {
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
          localStorage.setItem("right_record", base64Record);
        };
        const formData = new FormData();
        formData.append("text", sentences[currentPage]);
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
            const record = localStorage.getItem("right_record");
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
                [`${level}-${currentPage + 1}`]: totalScore
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
          alert("마이크를 찾을 수 없습니다.");
          break;
        case "Permission denied":
          alert("마이크 사용을 허용해주세요.");
          break;
        default:
          alert("마이크 사용에 문제가 발생했습니다.");
          break;
      }
    }
  };
  const onClickRetry = () => {
    setHighlightedPage(currentPage + 1);
    recordVoice();
  };
  const onClickMyVoice = () => {
    const rightRecord = localStorage.getItem("right_record");
    const audio = new Audio(rightRecord);
    audio.play();
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
