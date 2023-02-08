import ThumbnailPage from "./ThumbnailPage";

const RightEdgeThumbnail = () => {
  return (
    <div
      className={`w-[200px] h-[150px] grid grid-cols-2 rounded-lg overflow-clip shadow-lg mx-5`}
    >
      <ThumbnailPage />
      <ThumbnailPage />
    </div>
  );
};

export default RightEdgeThumbnail;
