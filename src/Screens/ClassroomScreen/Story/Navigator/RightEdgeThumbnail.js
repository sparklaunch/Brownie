import ThumbnailPage from "./ThumbnailPage";
import EmptyThumbnail from "./EmptyThumbnail";
import {
  RightEdgeThumbnailContainer,
  RightEmptyThumbnailContainer
} from "./RightEdgeThumbnailStyles";

const RightEdgeThumbnail = ({ leftPage, rightPage }) => {
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
    </RightEdgeThumbnailContainer>
  );
};

export default RightEdgeThumbnail;
