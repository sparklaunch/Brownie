import { ScoreStarImage } from "./ScoreStarStyles";

const ScoreStar = ({ filled }) => {
  if (filled) {
    return <ScoreStarImage />;
  } else {
    return <ScoreStarImage isEmpty={true} />;
  }
};

export default ScoreStar;
