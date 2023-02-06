import microphoneStateAtom from "../../Stores/Classroom/microphoneState";
import { useRecoilState } from "recoil";
import RecordingMicrophone from "./RecordingMicrophone";
import IdleMicrophone from "./IdleMicrophone";

const LeftMicrophone = ({ visible }) => {
  const [microphoneState, setMicrophoneState] =
    useRecoilState(microphoneStateAtom);
  if (visible) {
    return (
      <div className={`absolute bottom-[-100px] left-[14vw]`}>
        {microphoneState === "recording" ? (
          <RecordingMicrophone />
        ) : (
          <IdleMicrophone />
        )}
      </div>
    );
  } else {
    return <></>;
  }
};

export default LeftMicrophone;
