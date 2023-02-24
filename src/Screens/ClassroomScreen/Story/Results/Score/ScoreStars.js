import ScoreStar from "./ScoreStar";
import Constants from "../../../../../Utilities/Constants";
import { ScoreStarsContainer } from "./ScoreStarsStyles";

const ScoreStars = ({ score }) => {
  return (
    <ScoreStarsContainer>
      <ScoreStar filled={true} />
      <ScoreStar filled={score >= Constants.GOOD_THRESHOLD} />
      <ScoreStar filled={score >= Constants.EXCELLENT_THRESHOLD} />
    </ScoreStarsContainer>
  );
};

export default ScoreStars;
