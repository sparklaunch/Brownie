import ThumbnailPage from "./ThumbnailPage";
import EmptyThumbnail from "./EmptyThumbnail";
import {
  RightEdgeThumbnailContainer,
  RightEmptyThumbnailContainer
} from "./RightEdgeThumbnailStyles";

const RightEdgeThumbnail = ({ leftPage, rightPage }) => {
  if (rightPage >= 12) {
    // rightPage가 12보다 크거나 같다면, 즉, 마지막 페이지일 경우,
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
