import ThumbnailPage from "./ThumbnailPage";
import EmptyThumbnail from "./EmptyThumbnail";

const LeftEdgeThumbnail = ({ leftPage, rightPage }) => {
  if (leftPage < 0) {
    return (
      <div
        className={`w-[216px] h-[144px] grid grid-cols-2 rounded-lg overflow-clip shadow-lg mx-3 border-4 border-transparent`}
      >
        <EmptyThumbnail />
        <EmptyThumbnail />
      </div>
    );
  }
  return (
    <div
      className={`w-[216px] h-[144px] grid grid-cols-2 rounded-lg overflow-clip shadow-lg mx-3 border-4 border-transparent`}
    >
      <ThumbnailPage isLeftEdge={true} page={leftPage} pageDirection={"left"} />
      <ThumbnailPage page={rightPage} pageDirection={"right"} />
    </div>
  );
};

export default LeftEdgeThumbnail;
