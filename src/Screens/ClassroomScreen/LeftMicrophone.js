import microphoneStateAtom from "../../Stores/Classroom/microphoneState";
import { useRecoilState } from "recoil";
import audioDurationAtom from "../../Stores/Classroom/audioDuration";

const LeftMicrophone = () => {
  const [microphoneState, setMicrophoneState] =
    useRecoilState(microphoneStateAtom);
  const [audioDuration, setAudioDuration] = useRecoilState(audioDurationAtom);
  const recordVoice = async () => {
    const device = await navigator.mediaDevices.getUserMedia({
      audio: true
    });
    const recorder = new MediaRecorder(device);
    recorder.start();
    setMicrophoneState("recording");
    recorder.ondataavailable = (e) => {
      const audio = new Audio(URL.createObjectURL(e.data));
      audio.play();
      setMicrophoneState("idle");
    };
    setTimeout(() => {
      recorder.stop();
    }, audioDuration * 1000);
  };
  const onClickMicrophone = () => {
    if (microphoneState === "idle") {
      recordVoice();
    }
  };
  return (
    <div className={`absolute bottom-[-100px] left-[14vw]`}>
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
