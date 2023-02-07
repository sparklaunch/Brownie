import { useRecoilState } from "recoil";
import microphoneStateAtom from "../../Stores/Classroom/microphoneState";
import RightRecordingMicrophone from "./RightRecordingMicrophone";
import RightIdleMicrophone from "./RightIdleMicrophone";

const RightMicrophone = ({ visible }) => {
  const [microphoneState, setMicrophoneState] =
    useRecoilState(microphoneStateAtom);
  if (visible) {
    return (
      <div className={`absolute bottom-[-100px] right-[14vw]`}>
        {microphoneState === "right_recording" ? (
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
