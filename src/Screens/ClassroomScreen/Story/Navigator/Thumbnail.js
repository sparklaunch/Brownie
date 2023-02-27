import ThumbnailPage from "./ThumbnailPage";
import { useRecoilState } from "recoil";
import scoresAtom from "../../../../Stores/Classroom/Story/scores";
import { useParams } from "react-router-dom";
import { ThumbnailContainer } from "./ThumbnailStyles";

const Thumbnail = ({ leftPage, rightPage, isCurrentPage = false }) => {
  const { level } = useParams();
  const [scores, setScores] = useRecoilState(scoresAtom);
  return (
    <ThumbnailContainer bordered={isCurrentPage}>
      <ThumbnailPage page={leftPage} pageDirection={"left"} />
      <ThumbnailPage page={rightPage} pageDirection={"right"} />
      {/*{completed && (*/}
      {/*  <CompletedBadgeContainer>*/}
      {/*    <CompletedBadgeImage*/}
      {/*      src={`/assets/images/thumbnail_completed_badge.svg`}*/}
      {/*      alt={`Completed Badge`}*/}
      {/*    />*/}
      {/*  </CompletedBadgeContainer>*/}
      {/*)}*/}
    </ThumbnailContainer>
  );
};

export default Thumbnail;
