import ThumbnailPage from "./ThumbnailPage";

const RightEdgeThumbnail = () => {
  return (
    <div
      className={`w-[216px] h-[144px] grid grid-cols-2 rounded-lg overflow-clip shadow-lg mx-3`}
    >
      <ThumbnailPage page={9} pageDirection={"left"} />
      <ThumbnailPage isRightEdge={true} page={10} pageDirection={"right"} />
    </div>
  );
};

export default RightEdgeThumbnail;
