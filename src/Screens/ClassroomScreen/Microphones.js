import microphoneStateAtom from "../../Stores/Classroom/microphoneState";
import { useRecoilState } from "recoil";
import LeftMicrophone from "./LeftMicrophone";
import RightMicrophone from "./RightMicrophone";

const Microphones = () => {
  const [microphoneState, setMicrophoneState] =
    useRecoilState(microphoneStateAtom);
  return (
    <div className={`absolute w-[70vw] h-[46vw]`}>
      <LeftMicrophone />
      <RightMicrophone />
    </div>
  );
};

export default Microphones;
