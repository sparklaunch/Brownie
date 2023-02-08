import ThumbnailPage from "./ThumbnailPage";

const LeftEdgeThumbnail = () => {
  return (
    <div
      className={`w-[216px] h-[144px] grid grid-cols-2 rounded-lg overflow-clip shadow-lg mx-3`}
    >
      <ThumbnailPage isLeftEdge={true} />
      <ThumbnailPage />
    </div>
  );
};

export default LeftEdgeThumbnail;
