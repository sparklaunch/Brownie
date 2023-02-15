import LeftEdgeThumbnail from "./LeftEdgeThumbnail";
import RightEdgeThumbnail from "./RightEdgeThumbnail";
import Thumbnail from "./Thumbnail";
import { useRecoilState } from "recoil";
import navigatorPageAtom from "../../../../Stores/Classroom/Story/navigatorPage";
import currentPageAtom from "../../../../Stores/Classroom/Story/currentPage";
import navigatorOpenAtom from "../../../../Stores/Classroom/Story/navigatorOpen";

const Thumbnails = () => {
  const [navigatorPage, setNavigatorPage] = useRecoilState(navigatorPageAtom);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [navigatorOpen, setNavigatorOpen] = useRecoilState(navigatorOpenAtom);
  const onClickLeftEdgeThumbnail = () => {
    setNavigatorPage(Math.max(navigatorPage - 4, 0));
    setCurrentPage(Math.max(navigatorPage - 4, 0));
    setNavigatorOpen(false);
  };
  const onClickRightEdgeThumbnail = () => {
    setNavigatorPage(Math.min(navigatorPage + 4, 10));
    setCurrentPage(Math.min(navigatorPage + 4, 10));
    setNavigatorOpen(false);
  };
  const onClickLeftThumbnail = () => {
    setNavigatorPage(Math.max(navigatorPage - 2, 0));
    setCurrentPage(Math.max(navigatorPage - 2, 0));
    setNavigatorOpen(false);
  };
  const onClickRightThumbnail = () => {
    setNavigatorPage(Math.min(navigatorPage + 2, 10));
    setCurrentPage(Math.min(navigatorPage + 2, 10));
    setNavigatorOpen(false);
  };
  return (
    <div className={`flex flex-row items-center`}>
      <div onClick={onClickLeftEdgeThumbnail}>
        <LeftEdgeThumbnail
          leftPage={navigatorPage - 4}
          rightPage={navigatorPage - 3}
        />
      </div>
      <div onClick={onClickLeftThumbnail}>
        <Thumbnail leftPage={navigatorPage - 2} rightPage={navigatorPage - 1} />
      </div>
      <div>
        <Thumbnail
          leftPage={navigatorPage}
          rightPage={navigatorPage + 1}
          isCurrentPage={true}
        />
      </div>
      <div onClick={onClickRightThumbnail}>
        <Thumbnail leftPage={navigatorPage + 2} rightPage={navigatorPage + 3} />
      </div>
      <div onClick={onClickRightEdgeThumbnail}>
        <RightEdgeThumbnail
          leftPage={navigatorPage + 4}
          rightPage={navigatorPage + 5}
        />
      </div>
    </div>
  );
};

export default Thumbnails;
