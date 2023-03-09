import { ScoreStarImage } from "./ScoreStarStyles";

const ScoreStar = ({ filled }) => {
  if (filled) {
    // 채워진 별일 경우,
    return <ScoreStarImage />;
  } else {
    // 빈 별일 경우,
    return <ScoreStarImage isEmpty={true} />;
  }
};

export default ScoreStar;
