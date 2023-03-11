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
import { useRecoilValue } from "recoil";
import scoresAtom from "../../../../Stores/Classroom/Story/scores";
import { useParams } from "react-router-dom";

const ThumbnailPage = ({
  page,
  pageDirection,
  isLeftEdge = false,
  isRightEdge = false
}) => {
  const { level } = useParams();
  const scores = useRecoilValue(scoresAtom);
  const bookID = useData("id");
  const pageCompleted = scores[`${level}-${page}`] !== undefined; // 해당 페이지의 점수가 존재한다면, 즉, 해당 페이지를 완료했다면,
  if (page <= 0 || page > 10) {
    // 페이지가 0보다 작거나 10보다 크다면, 즉, 존재하지 않는 페이지라면,
    return <EmptyThumbnail />; // 빈 썸네일을 반환합니다.
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
        loading={"lazy"} // lazy loading
      />
      <ThumbnailPageGradient direction={direction} />
      <PageShadow pageDirection={pageDirection} />
      {pageCompleted && ( // 페이지를 완료했다면,
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
