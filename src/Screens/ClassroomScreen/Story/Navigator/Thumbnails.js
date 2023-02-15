import LeftEdgeThumbnail from "./LeftEdgeThumbnail";
import RightEdgeThumbnail from "./RightEdgeThumbnail";
import Thumbnail from "./Thumbnail";
import { useRecoilState } from "recoil";
import navigatorPageAtom from "../../../../Stores/Classroom/Story/navigatorPage";

const Thumbnails = () => {
  const [navigatorPage, setNavigatorPage] = useRecoilState(navigatorPageAtom);
  return (
    <div className={`flex flex-row items-center`}>
      <LeftEdgeThumbnail
        leftPage={navigatorPage - 4}
        rightPage={navigatorPage - 3}
      />
      <Thumbnail leftPage={navigatorPage - 2} rightPage={navigatorPage - 1} />
      <Thumbnail
        leftPage={navigatorPage}
        rightPage={navigatorPage + 1}
        isCurrentPage={true}
      />
      <Thumbnail leftPage={navigatorPage + 2} rightPage={navigatorPage + 3} />
      <RightEdgeThumbnail
        leftPage={navigatorPage + 4}
        rightPage={navigatorPage + 5}
      />
    </div>
  );
};

export default Thumbnails;
