import ThumbnailPage from "./ThumbnailPage";
import EmptyThumbnail from "./EmptyThumbnail";

const RightEdgeThumbnail = ({ leftPage, rightPage }) => {
  if (rightPage >= 12) {
    return (
      <div
        className={`w-[216px] h-[144px] grid grid-cols-2 rounded-lg overflow-clip mx-3 border-4 border-transparent`}
      >
        <EmptyThumbnail />
        <EmptyThumbnail />
      </div>
    );
  }
  return (
    <div
      className={`w-[216px] h-[144px] grid grid-cols-2 rounded-lg overflow-clip mx-3 border-4 border-transparent`}
    >
      <ThumbnailPage page={leftPage} pageDirection={"left"} />
      <ThumbnailPage
        isRightEdge={true}
        page={rightPage}
        pageDirection={"right"}
      />
    </div>
  );
};

export default RightEdgeThumbnail;
