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
  MyVoiceButtonContainer,
  RetryButtonContainer
} from "./LeftCompletedMicrophoneStyles";

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
          .post(
            "https://proxy.cors.sh/https://api.elasolution.com/pron_v2/",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                "x-cors-api-key": "temp_e4ec220dbf44f09c113217921d9d34d6",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                  "GET, POST, PUT, DELETE, OPTIONS",
                "X-API-KEY": "afef8c94d1094b58a3fc58e743eb9913"
              }
            }
          )
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
        <img
          src={`/assets/images/retry_button.svg`}
          alt={`Retry Button`}
          className={`mr-5 cursor-pointer w-[70px] h-[70px]`}
        />
      </RetryButtonContainer>
      <MyVoiceButtonContainer onClick={onClickMyVoice}>
        <img
          src={`/assets/images/my_voice_button.svg`}
          alt={`My Voice Button`}
          className={`cursor-pointer w-[70px] h-[70px]`}
        />
      </MyVoiceButtonContainer>
    </LeftCompletedMicrophoneContainer>
  );
};

export default LeftCompletedMicrophone;
