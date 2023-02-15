import { useRecoilState } from "recoil";
import audioDurationAtom from "../../../../../Stores/Classroom/audioDuration";
import styled from "styled-components";
import axios from "axios";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";
import uuid from "react-uuid";
import resultsScreenShownAtom from "../../../../../Stores/Classroom/Story/resultsScreenShown";
import currentPageAtom from "../../../../../Stores/Classroom/Story/currentPage";
import leftMicrophoneStateAtom from "../../../../../Stores/Classroom/Story/Microphones/leftMicrophoneState";
import rightMicrophoneStateAtom from "../../../../../Stores/Classroom/Story/Microphones/rightMicrophoneState";
import useData from "../../../../../Hooks/useData";

const LeftIdleMicrophone = () => {
  const sentences = useData(`sentences`);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  const [resultsScreenShown, setResultsScreenShown] = useRecoilState(
    resultsScreenShownAtom
  );
  const [leftMicrophoneState, setLeftMicrophoneState] = useRecoilState(
    leftMicrophoneStateAtom
  );
  const [rightMicrophoneState, setRightMicrophoneState] = useRecoilState(
    rightMicrophoneStateAtom
  );
  const [audioDuration, setAudioDuration] = useRecoilState(audioDurationAtom);
  const recordVoice = async () => {
    try {
      const device = await navigator.mediaDevices.getUserMedia({
        audio: true
      });
      const sound = new Audio("/assets/audio/microphone_on.wav");
      sound.play();
      const recorder = new MediaRecorder(device);
      recorder.start();
      setLeftMicrophoneState("recording");
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
            const stringResponse = JSON.stringify(response, null, 2);
            console.log(stringResponse);
            const totalScore = response.data.total_score;
            setTotalScore({
              score: totalScore,
              id: uuid()
            });
            setResultsScreenShown(true);
          })
          .catch((error) => {
            const stringError = JSON.stringify(error, null, 2);
            console.log(stringError);
          });
        const audio = new Audio(URL.createObjectURL(event.data));
        audio.play();
      };
      setTimeout(() => {
        recorder.stop();
        setLeftMicrophoneState("disabled");
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
  const onClickMicrophone = () => {
    if (leftMicrophoneState === "idle") {
      setRightMicrophoneState("disabled");
      recordVoice();
    }
  };
  const OuterCircle = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform: scale(1.2);
    background-color: #1ab9c5;
    animation: fadeOut 1.3s infinite;
    @keyframes fadeOut {
      0% {
        opacity: 0.3;
      }
      100% {
        opacity: 0;
      }
    }
  `;
  const InnerCircle = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform: scale(1.1);
    background-color: #1ab9c5;
    animation: fadeOut 1.3s infinite;
    @keyframes fadeOut {
      0% {
        opacity: 0.3;
      }
      100% {
        opacity: 0;
      }
    }
  `;
  const Wave = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform: scale(1);
    border: 5px solid #1ab9c5;
    animation: wave 1.3s infinite;
    @keyframes wave {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      100% {
        transform: scale(1.4);
        opacity: 0;
      }
    }
  `;
  switch (leftMicrophoneState) {
    case "idle":
      return (
        <div>
          <div>
            <OuterCircle />
            <InnerCircle />
            <Wave />
          </div>
          <img
            src={`/assets/images/icons/microphone_idle.svg`}
            alt={"Idle Microphone"}
            onClick={onClickMicrophone}
            className={`relative left-0 w-[70px] h-[70px] cursor-pointer
          `}
          />
        </div>
      );
    case "disabled":
      return (
        <img
          src={`/assets/images/icons/microphone_disabled.svg`}
          alt={"Disabled Microphone"}
          className={`relative left-0 w-[70px] h-[70px] cursor-pointer`}
        />
      );
  }
};

export default LeftIdleMicrophone;
