import LeftEdgeThumbnail from "./LeftEdgeThumbnail";
import RightEdgeThumbnail from "./RightEdgeThumbnail";
import Thumbnail from "./Thumbnail";
import { useRecoilState } from "recoil";
import navigatorPageAtom from "../../../../Stores/Classroom/Story/navigatorPage";
import currentPageAtom from "../../../../Stores/Classroom/Story/currentPage";
import navigatorOpenAtom from "../../../../Stores/Classroom/Story/navigatorOpen";
import scoresAtom from "../../../../Stores/Classroom/Story/scores";
import { useParams } from "react-router-dom";

const Thumbnails = () => {
  const { level } = useParams();
  const [navigatorPage, setNavigatorPage] = useRecoilState(navigatorPageAtom);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [navigatorOpen, setNavigatorOpen] = useRecoilState(navigatorOpenAtom);
  const [scores, setScores] = useRecoilState(scoresAtom);
  const onClickLeftEdgeThumbnail = () => {
    setNavigatorPage(Math.max(navigatorPage - 4, 0));
    setCurrentPage(Math.max(navigatorPage - 4, 0));
  };
  const onClickRightEdgeThumbnail = () => {
    setNavigatorPage(Math.min(navigatorPage + 4, 10));
    setCurrentPage(Math.min(navigatorPage + 4, 10));
  };
  const onClickLeftThumbnail = () => {
    setNavigatorPage(Math.max(navigatorPage - 2, 0));
    setCurrentPage(Math.max(navigatorPage - 2, 0));
  };
  const onClickRightThumbnail = () => {
    setNavigatorPage(Math.min(navigatorPage + 2, 10));
    setCurrentPage(Math.min(navigatorPage + 2, 10));
  };
  const getCompletedPages = () => {
    let completedPages = [];
    for (let i = 0; i < 10; i++) {
      if (
        scores[`${level}-${i}`] !== undefined &&
        scores[`${level}-${i + 1}`] !== undefined
      ) {
        completedPages.push(i);
        completedPages.push(i + 1);
      }
    }
    return completedPages;
  };
  return (
    <div className={`flex flex-row items-center`}>
      <div onClick={onClickLeftEdgeThumbnail}>
        <LeftEdgeThumbnail
          leftPage={navigatorPage - 4}
          rightPage={navigatorPage - 3}
          completed={
            getCompletedPages().includes(navigatorPage - 4) &&
            getCompletedPages().includes(navigatorPage - 3)
          }
        />
      </div>
      <div onClick={onClickLeftThumbnail}>
        <Thumbnail
          leftPage={navigatorPage - 2}
          rightPage={navigatorPage - 1}
          completed={
            getCompletedPages().includes(navigatorPage - 2) &&
            getCompletedPages().includes(navigatorPage - 1)
          }
        />
      </div>
      <div>
        <Thumbnail
          leftPage={navigatorPage}
          rightPage={navigatorPage + 1}
          isCurrentPage={true}
          completed={
            getCompletedPages().includes(navigatorPage) &&
            getCompletedPages().includes(navigatorPage + 1)
          }
        />
      </div>
      <div onClick={onClickRightThumbnail}>
        <Thumbnail
          leftPage={navigatorPage + 2}
          rightPage={navigatorPage + 3}
          completed={
            getCompletedPages().includes(navigatorPage + 2) &&
            getCompletedPages().includes(navigatorPage + 3)
          }
        />
      </div>
      <div onClick={onClickRightEdgeThumbnail}>
        <RightEdgeThumbnail
          leftPage={navigatorPage + 4}
          rightPage={navigatorPage + 5}
          completed={
            getCompletedPages().includes(navigatorPage + 4) &&
            getCompletedPages().includes(navigatorPage + 5)
          }
        />
      </div>
    </div>
  );
};

export default Thumbnails;
