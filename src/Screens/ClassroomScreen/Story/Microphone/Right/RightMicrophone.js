import { useRecoilState } from "recoil";
import RightRecordingMicrophone from "./RightRecordingMicrophone";
import RightIdleMicrophone from "./RightIdleMicrophone";
import rightMicrophoneStateAtom from "../../../../../Stores/Classroom/Story/Microphones/rightMicrophoneState";

const RightMicrophone = ({ visible }) => {
  const [rightMicrophoneState, setRightMicrophoneState] = useRecoilState(
    rightMicrophoneStateAtom
  );
  if (visible) {
    return (
      <div className={`absolute bottom-[-100px] right-[14vw]`}>
        {rightMicrophoneState === "recording" ? (
          <RightRecordingMicrophone />
        ) : (
          <RightIdleMicrophone />
        )}
      </div>
    );
  } else {
    return <></>;
  }
};

export default RightMicrophone;
