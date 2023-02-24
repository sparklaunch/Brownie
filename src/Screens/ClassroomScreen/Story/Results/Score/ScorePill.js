import ScoreStars from "./ScoreStars";
import ScoreText from "./ScoreText";
import Constants from "../../../../../Utilities/Constants";
import {
  ScorePillInnerContainer,
  ScorePillOuterContainer
} from "./ScorePillStyles";

const ScorePill = ({ score }) => {
  let borderColor;
  if (score >= Constants.EXCELLENT_THRESHOLD) {
    borderColor = `#15B58F`;
  } else if (score >= Constants.GOOD_THRESHOLD) {
    borderColor = `#FF8200`;
  } else {
    borderColor = `#FF2442`;
  }
  return (
    <ScorePillOuterContainer>
      <ScorePillInnerContainer borderColor={borderColor}>
        <ScoreStars score={score} />
        <ScoreText score={score} />
      </ScorePillInnerContainer>
    </ScorePillOuterContainer>
  );
};

export default ScorePill;
