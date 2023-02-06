import { useRecoilState } from "recoil";
import microphoneStateAtom from "../../Stores/Classroom/microphoneState";
import audioDurationAtom from "../../Stores/Classroom/audioDuration";

const IdleMicrophone = () => {
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
    recorder.ondataavailable = (event) => {
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
  return (
    <img
      src={`/assets/images/icons/microphone_${microphoneState}.svg`}
      alt={"Microphone"}
      onClick={onClickMicrophone}
      className={`relative left-0 w-[70px] h-[70px] ${
        microphoneState === "idle" ? "cursor-pointer" : ""
      }`}
    />
  );
};

export default IdleMicrophone;
