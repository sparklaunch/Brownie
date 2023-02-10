import { useRecoilState } from "recoil";
import LeftMicrophone from "./Left/LeftMicrophone";
import RightMicrophone from "./Right/RightMicrophone";
import currentPageAtom from "../../../../Stores/Classroom/Story/currentPage";
import { useEffect } from "react";
import microphoneStateAtom from "../../../../Stores/Classroom/Story/microphoneState";
import leftPageCompletedAtom from "../../../../Stores/Classroom/Story/leftPageCompleted";
import LeftButtons from "./Left/LeftButtons";

const Microphones = () => {
  const [microphoneState, setMicrophoneState] =
    useRecoilState(microphoneStateAtom);
  const [leftPageCompleted, setLeftPageCompleted] = useRecoilState(
    leftPageCompletedAtom
  );
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  useEffect(() => {
    setMicrophoneState("idle");
  }, [currentPage]);
  return (
    <div className={`absolute w-[70vw] h-[46vw]`}>
      {leftPageCompleted ? (
        <LeftButtons />
      ) : (
        <LeftMicrophone visible={currentPage !== 0} />
      )}
      <RightMicrophone visible={currentPage !== 10} />
    </div>
  );
};

export default Microphones;
