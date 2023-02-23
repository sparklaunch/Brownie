import ThumbnailPage from "./ThumbnailPage";
import { useRecoilState } from "recoil";
import scoresAtom from "../../../../Stores/Classroom/Story/scores";
import { useParams } from "react-router-dom";

const Thumbnail = ({ leftPage, rightPage, isCurrentPage = false }) => {
  const { level } = useParams();
  const [scores, setScores] = useRecoilState(scoresAtom);
  const completed = (function () {
    return (
      (scores[`${level}-${leftPage}`] && scores[`${level}-${rightPage}`]) ||
      (rightPage === 1 && scores[`${level}-${rightPage}`] !== undefined)
    );
  })();
  return (
    <div
      className={`relative w-[216px] h-[144px] border-4 grid grid-cols-2 rounded-lg cursor-pointer overflow-clip mx-3 ${
        isCurrentPage ? `border-[#FFD53D]` : `border-transparent`
      }`}
    >
      <ThumbnailPage page={leftPage} pageDirection={"left"} />
      <ThumbnailPage page={rightPage} pageDirection={"right"} />
      {completed && (
        <div>
          <div
            className={`absolute top-0 left-0 right-0 bottom-0 from-transparent to-black`}
          />
          <div
            className={`absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50`}
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
        </div>
      )}
    </div>
  );
};

export default Thumbnail;
