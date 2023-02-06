import microphoneStateAtom from "../../Stores/Classroom/microphoneState";
import { useRecoilState } from "recoil";

const LeftMicrophone = () => {
  const [microphoneState, setMicrophoneState] =
    useRecoilState(microphoneStateAtom);
  const recordVoice = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();
        mediaRecorder.ondataavailable = (e) => {
          const audioURL = window.URL.createObjectURL(e.data);
          const audio = new Audio(audioURL);
          audio.play();
        };
        mediaRecorder.onstop = () => {
          stream.getTracks().forEach((track) => track.stop());
        };
      })
      .catch((error) => {
        if (error.message === "Requested device not found") {
          alert("마이크를 찾을 수 없습니다.");
        }
      });
  };
  const onClickMicrophone = () => {
    if (microphoneState === "idle") {
      recordVoice();
    }
  };
  return (
    <div className={`absolute bottom-[-100px] left-[14vw]`}>
      {microphoneState === "idle" && (
        <img
          src={`/assets/images/icons/microphone_glow.svg`}
          alt={"Microphone glow"}
          className={`absolute top-0 left-0 scale-150`}
        />
      )}
      <img
        src={`/assets/images/icons/microphone_${microphoneState}.svg`}
        alt={"Microphone"}
        onClick={onClickMicrophone}
        className={`relative left-0 w-[70px] h-[70px] ${
          microphoneState === "idle" ? "cursor-pointer" : ""
        }`}
      />
    </div>
  );
};

export default LeftMicrophone;
