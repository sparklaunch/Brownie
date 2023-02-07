import microphoneStateAtom from "../../../Stores/Classroom/microphoneState";
import { useRecoilState } from "recoil";
import LeftRecordingMicrophone from "./LeftRecordingMicrophone";
import LeftIdleMicrophone from "./LeftIdleMicrophone";

const LeftMicrophone = ({ visible }) => {
  const [microphoneState, setMicrophoneState] =
    useRecoilState(microphoneStateAtom);
  if (visible) {
    return (
      <div className={`absolute bottom-[-100px] left-[14vw]`}>
        {microphoneState === "left_recording" ? (
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
