import { useRecoilState } from "recoil";
import LeftMicrophone from "./LeftMicrophone";
import RightMicrophone from "./RightMicrophone";
import currentPageAtom from "../../../Stores/Classroom/currentPage";

const Microphones = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  return (
    <div className={`absolute w-[70vw] h-[46vw]`}>
      <LeftMicrophone visible={currentPage !== 0} />
      <RightMicrophone visible={currentPage !== 10} />
    </div>
  );
};

export default Microphones;
