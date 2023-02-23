import ThumbnailPage from "./ThumbnailPage";
import EmptyThumbnail from "./EmptyThumbnail";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import scoresAtom from "../../../../Stores/Classroom/Story/scores";

const LeftEdgeThumbnail = ({ leftPage, rightPage }) => {
  const { level } = useParams();
  const [scores, setScores] = useRecoilState(scoresAtom);
  const completed = (function () {
    return scores[`${level}-${leftPage}`] && scores[`${level}-${rightPage}`];
  })();
  if (leftPage < 0) {
    return (
      <div
        className={`w-[216px] h-[144px] grid grid-cols-2 rounded-lg overflow-clip mx-3 border-4 border-transparent`}
      >
        <EmptyThumbnail />
        <EmptyThumbnail />
      </div>
    );
  }
  return (
    <div
      className={`relative w-[216px] h-[144px] grid grid-cols-2 rounded-lg overflow-clip mx-3 border-4 border-transparent cursor-pointer`}
    >
      <ThumbnailPage isLeftEdge={true} page={leftPage} pageDirection={"left"} />
      <ThumbnailPage page={rightPage} pageDirection={"right"} />
      {completed && (
        <>
          <div
            className={`absolute top-0 left-0 right-0 bottom-0 from-transparent bg-gradient-to-r to-black opacity-50`}
          />
          <div
            className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}
          >
            <img
              src={`/assets/images/thumbnail_completed_badge.svg`}
              alt={`Completed Badge`}
              className={`drop-shadow-2xl`}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default LeftEdgeThumbnail;
