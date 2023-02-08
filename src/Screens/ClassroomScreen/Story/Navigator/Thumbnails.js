import LeftEdgeThumbnail from "./LeftEdgeThumbnail";
import RightEdgeThumbnail from "./RightEdgeThumbnail";
import Thumbnail from "./Thumbnail";

const Thumbnails = () => {
  return (
    <div className={`flex flex-row items-center`}>
      <LeftEdgeThumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <RightEdgeThumbnail />
    </div>
  );
};

export default Thumbnails;
