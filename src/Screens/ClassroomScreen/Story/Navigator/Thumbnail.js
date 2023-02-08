import ThumbnailPage from "./ThumbnailPage";

const Thumbnail = ({ leftPage, rightPage }) => {
  return (
    <div
      className={`w-[216px] h-[144px] grid grid-cols-2 rounded-lg overflow-clip shadow-lg mx-3`}
    >
      <ThumbnailPage page={leftPage} pageDirection={"left"} />
      <ThumbnailPage page={rightPage} pageDirection={"right"} />
    </div>
  );
};

export default Thumbnail;
