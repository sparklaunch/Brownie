import ThumbnailPage from "./ThumbnailPage";
import EmptyThumbnail from "./EmptyThumbnail";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import scoresAtom from "../../../../Stores/Classroom/Story/scores";
import {
  CompletedBackdrop,
  CompletedBadgeImage,
  CompletedContainer,
  RightEdgeThumbnailContainer,
  RightEmptyThumbnailContainer
} from "./RightEdgeThumbnailStyles";

const RightEdgeThumbnail = ({ leftPage, rightPage }) => {
  const { level } = useParams();
  const [scores, setScores] = useRecoilState(scoresAtom);
  const completed = (function () {
    return (
      (scores[`${level}-${leftPage}`] && scores[`${level}-${rightPage}`]) ||
      (leftPage === 10 && scores[`${level}-${leftPage}`] !== undefined)
    );
  })();
  if (rightPage >= 12) {
    return (
      <RightEmptyThumbnailContainer>
        <EmptyThumbnail />
        <EmptyThumbnail />
      </RightEmptyThumbnailContainer>
    );
  }
  return (
    <RightEdgeThumbnailContainer>
      <ThumbnailPage page={leftPage} pageDirection={"left"} />
      <ThumbnailPage
        isRightEdge={true}
        page={rightPage}
        pageDirection={"right"}
      />
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
    </RightEdgeThumbnailContainer>
  );
};

export default RightEdgeThumbnail;
