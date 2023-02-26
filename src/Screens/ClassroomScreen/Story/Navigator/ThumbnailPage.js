import PageShadow from "./PageShadow";
import EmptyThumbnail from "./EmptyThumbnail";
import useData from "../../../../Hooks/useData";
import {
  ThumbnailPageContainer,
  ThumbnailPageGradient,
  ThumbnailPageImage
} from "./ThumbnailPageStyles";

const ThumbnailPage = ({
  page,
  pageDirection,
  isLeftEdge = false,
  isRightEdge = false
}) => {
  const bookID = useData("id");
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
    </ThumbnailPageContainer>
  );
};

export default ThumbnailPage;
