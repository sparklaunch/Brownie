import LeftEdgeThumbnail from "./LeftEdgeThumbnail";
import RightEdgeThumbnail from "./RightEdgeThumbnail";
import Thumbnail from "./Thumbnail";
import { useRecoilState } from "recoil";
import navigatorPageAtom from "../../../../Stores/Classroom/Story/navigatorPage";
import currentPageAtom from "../../../../Stores/Classroom/Story/currentPage";
import {
  CentralThumbnailContainer,
  LeftEdgeThumbnailContainer,
  LeftThumbnailContainer,
  RightEdgeThumbnailContainer,
  RightThumbnailContainer,
  ThumbnailsContainer
} from "./ThumbnailsStyles";

const Thumbnails = () => {
  const [navigatorPage, setNavigatorPage] = useRecoilState(navigatorPageAtom);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const onClickLeftEdgeThumbnail = () => {
    setNavigatorPage(Math.max(navigatorPage - 4, 0));
    setCurrentPage(Math.max(navigatorPage - 4, 0));
  };
  const onClickRightEdgeThumbnail = () => {
    setNavigatorPage(Math.min(navigatorPage + 4, 10));
    setCurrentPage(Math.min(navigatorPage + 4, 10));
  };
  const onClickCentralThumbnail = () => {
    setNavigatorPage(navigatorPage);
    setCurrentPage(navigatorPage);
  };
  const onClickLeftThumbnail = () => {
    setNavigatorPage(Math.max(navigatorPage - 2, 0));
    setCurrentPage(Math.max(navigatorPage - 2, 0));
  };
  const onClickRightThumbnail = () => {
    setNavigatorPage(Math.min(navigatorPage + 2, 10));
    setCurrentPage(Math.min(navigatorPage + 2, 10));
  };
  return (
    <ThumbnailsContainer>
      <LeftEdgeThumbnailContainer onClick={onClickLeftEdgeThumbnail}>
        <LeftEdgeThumbnail
          leftPage={navigatorPage - 4}
          rightPage={navigatorPage - 3}
        />
      </LeftEdgeThumbnailContainer>
      <LeftThumbnailContainer onClick={onClickLeftThumbnail}>
        <Thumbnail leftPage={navigatorPage - 2} rightPage={navigatorPage - 1} />
      </LeftThumbnailContainer>
      <CentralThumbnailContainer onClick={onClickCentralThumbnail}>
        <Thumbnail
          leftPage={navigatorPage}
          rightPage={navigatorPage + 1}
          isCurrentPage={true}
        />
      </CentralThumbnailContainer>
      <RightThumbnailContainer onClick={onClickRightThumbnail}>
        <Thumbnail leftPage={navigatorPage + 2} rightPage={navigatorPage + 3} />
      </RightThumbnailContainer>
      <RightEdgeThumbnailContainer onClick={onClickRightEdgeThumbnail}>
        <RightEdgeThumbnail
          leftPage={navigatorPage + 4}
          rightPage={navigatorPage + 5}
        />
      </RightEdgeThumbnailContainer>
    </ThumbnailsContainer>
  );
};

export default Thumbnails;
