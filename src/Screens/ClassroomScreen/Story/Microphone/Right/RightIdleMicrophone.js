import { useRecoilState } from "recoil";
import audioDurationAtom from "../../../../../Stores/Classroom/audioDuration";
import styled from "styled-components";
import axios from "axios";
import currentPageAtom from "../../../../../Stores/Classroom/Story/currentPage";
import rightMicrophoneStateAtom from "../../../../../Stores/Classroom/Story/Microphones/rightMicrophoneState";
import uuid from "react-uuid";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";
import resultsScreenShownAtom from "../../../../../Stores/Classroom/Story/resultsScreenShown";
import rightFinishedRecordingAtom from "../../../../../Stores/Classroom/Story/rightFinishedRecording";
import useData from "../../../../../Hooks/useData";
import Constants from "../../../../../Utilities/Constants";
import Swal from "sweetalert2";

const LeftIdleMicrophone = () => {
  const sentences = useData("sentences");
  const [rightFinishedRecording, setRightFinishedRecording] = useRecoilState(
    rightFinishedRecordingAtom
  );
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  const [resultsScreenShown, setResultsScreenShown] = useRecoilState(
    resultsScreenShownAtom
  );
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
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
      setRightMicrophoneState("recording");
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
        setRightFinishedRecording(true);
        setRightMicrophoneState("disabled");
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
    if (rightMicrophoneState === "idle") {
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
  switch (rightMicrophoneState) {
    case "disabled":
      return (
        <img
          src={`/assets/images/icons/microphone_disabled.svg`}
          alt={"Disabled microphone"}
          className={`relative left-0 w-[70px] h-[70px]`}
        />
      );
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
            alt={"Microphone"}
            onClick={onClickMicrophone}
            className={`relative left-0 w-[70px] h-[70px] cursor-pointer`}
          />
        </div>
      );
  }
};

export default LeftIdleMicrophone;
