import LeftPageTurner from "./LeftPageTurner";
import RightPageTurner from "./RightPageTurner";
import { useRecoilState } from "recoil";
import currentPageAtom from "../../../../Stores/Classroom/Story/currentPage";

const PageTurners = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  return (
    <div>
      <LeftPageTurner visible={currentPage !== 0} />
      <RightPageTurner visible={currentPage !== 10} />
    </div>
  );
};

export default PageTurners;
