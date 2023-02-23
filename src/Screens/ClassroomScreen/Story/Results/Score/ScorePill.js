import ScoreStars from "./ScoreStars";
import ScoreText from "./ScoreText";
import { useRecoilState } from "recoil";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";
import Constants from "../../../../../Utilities/Constants";
import {
  ScorePillInnerContainer,
  ScorePillOuterContainer
} from "./ScorePillStyles";

const ScorePill = () => {
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  let borderColor;
  if (totalScore.score >= Constants.EXCELLENT_THRESHOLD) {
    borderColor = `#15B58F`;
  } else if (totalScore.score >= Constants.GOOD_THRESHOLD) {
    borderColor = `#FF8200`;
  } else {
    borderColor = `#FF2442`;
  }
  return (
    <ScorePillOuterContainer>
      <ScorePillInnerContainer borderColor={borderColor}>
        <ScoreStars />
        <ScoreText />
      </ScorePillInnerContainer>
    </ScorePillOuterContainer>
  );
};

export default ScorePill;
