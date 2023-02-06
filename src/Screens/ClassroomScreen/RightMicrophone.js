import { useRecoilState } from "recoil";
import microphoneStateAtom from "../../Stores/Classroom/microphoneState";

const RightMicrophone = () => {
  const [microphoneState, setMicrophoneState] =
    useRecoilState(microphoneStateAtom);
  return (
    <div className={`absolute bottom-[-100px] right-[14vw]`}>
      <img
        src={`/assets/images/icons/microphone_${microphoneState}.svg`}
        alt={"Microphone"}
        className={`relative left-0 w-[70px] h-[70px] ${
          microphoneState === "idle" ? "cursor-pointer" : ""
        }`}
      />
    </div>
  );
};

export default RightMicrophone;
