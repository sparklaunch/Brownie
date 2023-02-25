import ThumbnailPage from "./ThumbnailPage";
import EmptyThumbnail from "./EmptyThumbnail";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import scoresAtom from "../../../../Stores/Classroom/Story/scores";
import {
  CompletedBackdrop,
  CompletedBadgeImage,
  CompletedContainer,
  LeftEdgeThumbnailContainer,
  LeftEmptyThumbnailContainer
} from "./LeftEdgeThumbnailStyles";

const LeftEdgeThumbnail = ({ leftPage, rightPage }) => {
  const { level } = useParams();
  const [scores, setScores] = useRecoilState(scoresAtom);
  const completed = (function () {
    return (
      (scores[`${level}-${leftPage}`] && scores[`${level}-${rightPage}`]) ||
      (rightPage === 1 && scores[`${level}-${rightPage}`] !== undefined)
    );
  })();
  if (leftPage < 0) {
    return (
      <LeftEmptyThumbnailContainer>
        <EmptyThumbnail />
        <EmptyThumbnail />
      </LeftEmptyThumbnailContainer>
    );
  }
  return (
    <LeftEdgeThumbnailContainer>
      <ThumbnailPage isLeftEdge={true} page={leftPage} pageDirection={"left"} />
      <ThumbnailPage page={rightPage} pageDirection={"right"} />
      {completed && (
        <>
          <CompletedBackdrop />
          <CompletedContainer>
            <CompletedBadgeImage
              src={`/assets/images/thumbnail_completed_badge.svg`}
              alt={`Completed Badge`}
            />
          </CompletedContainer>
        </>
      )}
    </LeftEdgeThumbnailContainer>
  );
};

export default LeftEdgeThumbnail;
