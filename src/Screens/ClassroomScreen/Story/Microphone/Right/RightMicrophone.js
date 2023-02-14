import { useRecoilState } from "recoil";
import RightRecordingMicrophone from "./RightRecordingMicrophone";
import RightIdleMicrophone from "./RightIdleMicrophone";
import rightMicrophoneStateAtom from "../../../../../Stores/Classroom/Story/Microphones/rightMicrophoneState";
import currentPageAtom from "../../../../../Stores/Classroom/Story/currentPage";

const RightMicrophone = () => {
  const [rightMicrophoneState, setRightMicrophoneState] = useRecoilState(
    rightMicrophoneStateAtom
  );
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  if (currentPage !== 10) {
    return (
      <div>
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
