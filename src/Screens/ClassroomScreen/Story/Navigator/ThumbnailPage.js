import PageShadow from "./PageShadow";
import EmptyThumbnail from "./EmptyThumbnail";
import useData from "../../../../Hooks/useData";
import {
  CompletedBadgeContainer,
  CompletedBadgeImage,
  ThumbnailPageContainer,
  ThumbnailPageGradient,
  ThumbnailPageImage
} from "./ThumbnailPageStyles";
import { useRecoilState } from "recoil";
import scoresAtom from "../../../../Stores/Classroom/Story/scores";
import { useParams } from "react-router-dom";

const ThumbnailPage = ({
  page,
  pageDirection,
  isLeftEdge = false,
  isRightEdge = false
}) => {
  const { level } = useParams();
  const [scores, setScores] = useRecoilState(scoresAtom);
  const bookID = useData("id");
  const pageCompleted = scores[`${level}-${page}`] !== undefined;
  if (page <= 0 || page > 10) {
    return <EmptyThumbnail />;
  }
  const direction = (() => {
    if (isLeftEdge) {
      return "left";
    } else if (isRightEdge) {
      return "right";
    } else {
      return null;
    }
  })();
  return (
    <ThumbnailPageContainer>
      <ThumbnailPageImage
        src={`/assets/images/pages/${bookID}_${page}.jpg`}
        alt={`Page ${page}`}
        loading={"lazy"}
      />
      <ThumbnailPageGradient direction={direction} />
      <PageShadow pageDirection={pageDirection} />
      {pageCompleted && (
        <CompletedBadgeContainer>
          <CompletedBadgeImage
            src={`/assets/images/thumbnail_completed_badge.svg`}
            alt={`Completed Badge`}
          />
        </CompletedBadgeContainer>
      )}
    </ThumbnailPageContainer>
  );
};

export default ThumbnailPage;
