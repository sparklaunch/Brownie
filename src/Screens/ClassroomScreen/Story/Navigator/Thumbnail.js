import ThumbnailPage from "./ThumbnailPage";
import { ThumbnailContainer } from "./ThumbnailStyles";

const Thumbnail = ({ leftPage, rightPage, isCurrentPage = false }) => {
  return (
    <ThumbnailContainer bordered={isCurrentPage}>
      <ThumbnailPage page={leftPage} pageDirection={"left"} />
      <ThumbnailPage page={rightPage} pageDirection={"right"} />
    </ThumbnailContainer>
  );
};

export default Thumbnail;
