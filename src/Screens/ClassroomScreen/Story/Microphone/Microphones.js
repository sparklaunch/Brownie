import { useRecoilState } from "recoil";
import LeftMicrophone from "./Left/LeftMicrophone";
import RightMicrophone from "./Right/RightMicrophone";
import currentPageAtom from "../../../../Stores/Classroom/Story/currentPage";
import { useEffect } from "react";
import microphoneStateAtom from "../../../../Stores/Classroom/Story/microphoneState";

const Microphones = () => {
  const [microphoneState, setMicrophoneState] =
    useRecoilState(microphoneStateAtom);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  useEffect(() => {
    setMicrophoneState("idle");
  }, [currentPage]);
  return (
    <div className={`absolute w-[70vw] h-[46vw]`}>
      <LeftMicrophone visible={currentPage !== 0} />
      <RightMicrophone visible={currentPage !== 10} />
    </div>
  );
};

export default Microphones;
