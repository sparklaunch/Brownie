import { useRecoilState } from "recoil";
import microphoneStateAtom from "../../Stores/Classroom/microphoneState";
import RecordingMicrophone from "./RecordingMicrophone";
import IdleMicrophone from "./IdleMicrophone";

const RightMicrophone = ({ visible }) => {
  const [microphoneState, setMicrophoneState] =
    useRecoilState(microphoneStateAtom);
  if (visible) {
    return (
      <div className={`absolute bottom-[-100px] right-[14vw]`}>
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

export default RightMicrophone;
