import microphoneStateAtom from "../../Stores/Classroom/microphoneState";
import { useRecoilState } from "recoil";

const Microphones = () => {
  const [microphoneState, setMicrophoneState] =
    useRecoilState(microphoneStateAtom);
  return (
    <div className={`absolute w-[70vw] h-[46vw]`}>
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
          className={`relative left-0 w-[70px] h-[70px] ${
            microphoneState === "idle" ? "cursor-pointer" : ""
          }`}
        />
      </div>
      <div className={`absolute bottom-[-100px] right-[14vw]`}>
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
          className={`relative left-0 w-[70px] h-[70px] ${
            microphoneState === "idle" ? "cursor-pointer" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default Microphones;
