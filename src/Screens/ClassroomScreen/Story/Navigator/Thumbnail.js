import ThumbnailPage from "./ThumbnailPage";
import { useRecoilState } from "recoil";
import scoresAtom from "../../../../Stores/Classroom/Story/scores";
import { useParams } from "react-router-dom";
import {
  CompletedBackdrop,
  CompletedBadgeContainer,
  CompletedBadgeImage,
  ThumbnailContainer
} from "./ThumbnailStyles";

const Thumbnail = ({ leftPage, rightPage, isCurrentPage = false }) => {
  const { level } = useParams();
  const [scores, setScores] = useRecoilState(scoresAtom);
  const completed = (function () {
    return (
      (scores[`${level}-${leftPage}`] && scores[`${level}-${rightPage}`]) ||
      (rightPage === 1 && scores[`${level}-${rightPage}`] !== undefined) ||
      (leftPage === 10 && scores[`${level}-${leftPage}`] !== undefined)
    );
  })();
  return (
    <ThumbnailContainer bordered={isCurrentPage}>
      <ThumbnailPage page={leftPage} pageDirection={"left"} />
      <ThumbnailPage page={rightPage} pageDirection={"right"} />
      {completed && (
        <>
          <CompletedBackdrop />
          <CompletedBadgeContainer>
            <CompletedBadgeImage
              src={`/assets/images/thumbnail_completed_badge.svg`}
              alt={`Completed Badge`}
            />
          </CompletedBadgeContainer>
        </>
      )}
    </ThumbnailContainer>
  );
};

export default Thumbnail;
