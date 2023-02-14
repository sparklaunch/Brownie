import { useRecoilState } from "recoil";
import LeftRecordingMicrophone from "./LeftRecordingMicrophone";
import LeftIdleMicrophone from "./LeftIdleMicrophone";
import leftMicrophoneStateAtom from "../../../../../Stores/Classroom/Story/Microphones/leftMicrophoneState";
import currentPageAtom from "../../../../../Stores/Classroom/Story/currentPage";

const LeftMicrophone = () => {
  const [leftMicrophoneState, setLeftMicrophoneState] = useRecoilState(
    leftMicrophoneStateAtom
  );
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  if (currentPage !== 0) {
    return (
      <div>
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
