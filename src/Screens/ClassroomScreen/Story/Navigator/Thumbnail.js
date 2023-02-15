import ThumbnailPage from "./ThumbnailPage";

const Thumbnail = ({ leftPage, rightPage, isCurrentPage = false }) => {
  return (
    <div
      className={`w-[216px] h-[144px] border-4 grid grid-cols-2 rounded-lg cursor-pointer overflow-clip mx-3 ${
        isCurrentPage ? `border-[#FFD53D]` : `border-transparent`
      }`}
    >
      <ThumbnailPage page={leftPage} pageDirection={"left"} />
      <ThumbnailPage page={rightPage} pageDirection={"right"} />
    </div>
  );
};

export default Thumbnail;
