import LeftEdgeThumbnail from "./LeftEdgeThumbnail";
import RightEdgeThumbnail from "./RightEdgeThumbnail";
import Thumbnail from "./Thumbnail";

const Thumbnails = () => {
  return (
    <div className={`flex flex-row items-center`}>
      <LeftEdgeThumbnail />
      <Thumbnail leftPage={3} rightPage={4} />
      <Thumbnail leftPage={5} rightPage={6} isCurrentPage={true} />
      <Thumbnail leftPage={7} rightPage={8} />
      <RightEdgeThumbnail />
    </div>
  );
};

export default Thumbnails;
