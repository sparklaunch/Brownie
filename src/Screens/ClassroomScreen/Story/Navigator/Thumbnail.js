import ThumbnailPage from "./ThumbnailPage";

const Thumbnail = () => {
  return (
    <div
      className={`w-[216px] h-[144px] grid grid-cols-2 rounded-lg overflow-clip shadow-lg mx-3`}
    >
      <ThumbnailPage />
      <ThumbnailPage />
    </div>
  );
};

export default Thumbnail;
