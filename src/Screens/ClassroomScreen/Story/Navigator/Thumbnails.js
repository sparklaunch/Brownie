import LeftEdgeThumbnail from "./LeftEdgeThumbnail";
import RightEdgeThumbnail from "./RightEdgeThumbnail";
import Thumbnail from "./Thumbnail";
import currentPageAtom from "../../../../Stores/Classroom/Story/currentPage";
import { useRecoilState } from "recoil";

const Thumbnails = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  return (
    <div className={`flex flex-row items-center`}>
      <LeftEdgeThumbnail
        leftPage={currentPage - 4}
        rightPage={currentPage - 3}
      />
      <Thumbnail leftPage={currentPage - 2} rightPage={currentPage - 1} />
      <Thumbnail
        leftPage={currentPage}
        rightPage={currentPage + 1}
        isCurrentPage={true}
      />
      <Thumbnail leftPage={currentPage + 2} rightPage={currentPage + 3} />
      <RightEdgeThumbnail
        leftPage={currentPage + 4}
        rightPage={currentPage + 5}
      />
    </div>
  );
};

export default Thumbnails;
