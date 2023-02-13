import { useRecoilState } from "recoil";
import LeftMicrophone from "./Left/LeftMicrophone";
import RightMicrophone from "./Right/RightMicrophone";
import currentPageAtom from "../../../../Stores/Classroom/Story/currentPage";
import { useEffect } from "react";
import LeftButtons from "./Left/LeftButtons";
import leftMicrophoneStateAtom from "../../../../Stores/Classroom/Story/Microphones/leftMicrophoneState";
import rightMicrophoneStateAtom from "../../../../Stores/Classroom/Story/Microphones/rightMicrophoneState";
import RightButtons from "./Right/RightButtons";

const Microphones = () => {
  const [leftMicrophoneState, setLeftMicrophoneState] = useRecoilState(
    leftMicrophoneStateAtom
  );
  const [rightMicrophoneState, setRightMicrophoneState] = useRecoilState(
    rightMicrophoneStateAtom
  );
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  useEffect(() => {
    setLeftMicrophoneState("idle");
    setRightMicrophoneState("idle");
  }, [currentPage]);
  return (
    <div className={`absolute w-[70vw] h-[46vw]`}>
      {leftMicrophoneState === "completed" ? (
        <LeftButtons />
      ) : (
        <LeftMicrophone visible={currentPage !== 0} />
      )}
      {rightMicrophoneState === "completed" ? (
        <RightButtons />
      ) : (
        <RightMicrophone visible={currentPage !== 10} />
      )}
    </div>
  );
};

export default Microphones;
