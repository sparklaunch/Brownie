import { useRecoilState } from "recoil";
import microphoneStateAtom from "../../Stores/Classroom/microphoneState";
import audioDurationAtom from "../../Stores/Classroom/audioDuration";
import styled from "styled-components";
import axios from "axios";
import currentPageAtom from "../../Stores/Classroom/currentPage";
import { useParams } from "react-router-dom";

const LeftIdleMicrophone = () => {
  const { level } = useParams();
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [microphoneState, setMicrophoneState] =
    useRecoilState(microphoneStateAtom);
  const [audioDuration, setAudioDuration] = useRecoilState(audioDurationAtom);
  const recordVoice = async () => {
    const device = await navigator.mediaDevices.getUserMedia({
      audio: true
    });
    const recorder = new MediaRecorder(device);
    recorder.start();
    setMicrophoneState("right_recording");
    recorder.ondataavailable = (event) => {
      const formData = new FormData();
      formData.append(
        "native_audio",
        `/assets/audio/pages/${level}-${currentPage}.mp3`
      );
      formData.append("text", "Ant, Bug and Cat");
      formData.append("student_audio", event.data);
      axios
        .post("https://api.elasolution.com/pron_v2/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "*",
            "X-API-KEY": "afef8c94d1094b58a3fc58e743eb9913",
            Accept: "application/json",
            withCredentials: true
          }
        })
        .then((response) => {
          JSON.stringify(response, null, 2);
        })
        .catch((error) => {
          JSON.stringify(error, null, 2);
        });
      const audio = new Audio(URL.createObjectURL(event.data));
      audio.play();
      setMicrophoneState("idle");
    };
    setTimeout(() => {
      recorder.stop();
    }, audioDuration);
  };
  const onClickMicrophone = () => {
    if (microphoneState === "idle") {
      const sound = new Audio("/assets/audio/microphone_on.wav");
      sound.play();
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
  return (
    <div>
      {microphoneState === "idle" && (
        <div>
          <OuterCircle />
          <InnerCircle />
          <Wave />
        </div>
      )}
      <img
        src={`/assets/images/icons/microphone_${
          microphoneState.includes("recording") ? "disabled" : microphoneState
        }.svg`}
        alt={"Microphone"}
        onClick={onClickMicrophone}
        className={`relative left-0 w-[70px] h-[70px] ${
          microphoneState === "idle" ? "cursor-pointer" : ""
        }`}
      />
    </div>
  );
};

export default LeftIdleMicrophone;
