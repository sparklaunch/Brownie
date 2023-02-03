import LeftPage from "./LeftPage";
import RightPage from "./RightPage";
import { useParams } from "react-router-dom";
import currentPageAtom from "../../Stores/Classroom/currentPage";
import { useRecoilState } from "recoil";
import AudioManager from "./AudioManager";

const BookContent = () => {
  const { level } = useParams();
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const leftPageFile = `/assets/images/pages/${level}-${currentPage}.jpg`;
  const rightPageFile = `/assets/images/pages/${level}-${currentPage + 1}.jpg`;
  return (
    <div className={`grid grid-cols-2 gap-0`}>
      <LeftPage fileName={leftPageFile} />
      <RightPage fileName={rightPageFile} />
      <AudioManager />
    </div>
  );
};

export default BookContent;
