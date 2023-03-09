import ThumbnailPage from "./ThumbnailPage";
import EmptyThumbnail from "./EmptyThumbnail";
import {
  LeftEdgeThumbnailContainer,
  LeftEmptyThumbnailContainer
} from "./LeftEdgeThumbnailStyles";

const LeftEdgeThumbnail = ({ leftPage, rightPage }) => {
  if (leftPage < 0) {
    // leftPage가 0보다 작다면,
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
    </LeftEdgeThumbnailContainer>
  );
};

export default LeftEdgeThumbnail;
