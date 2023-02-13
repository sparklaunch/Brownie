import { useRecoilState } from "recoil";
import LeftRecordingMicrophone from "./LeftRecordingMicrophone";
import LeftIdleMicrophone from "./LeftIdleMicrophone";
import leftMicrophoneStateAtom from "../../../../../Stores/Classroom/Story/Microphones/leftMicrophoneState";

const LeftMicrophone = ({ visible }) => {
  const [leftMicrophoneState, setLeftMicrophoneState] = useRecoilState(
    leftMicrophoneStateAtom
  );
  if (visible) {
    return (
      <div className={`absolute bottom-[-100px] left-[14vw]`}>
        {leftMicrophoneState === "recording" ? (
          <LeftRecordingMicrophone />
        ) : (
          <LeftIdleMicrophone />
        )}
      </div>
    );
  } else {
    return <></>;
  }
};

export default LeftMicrophone;
