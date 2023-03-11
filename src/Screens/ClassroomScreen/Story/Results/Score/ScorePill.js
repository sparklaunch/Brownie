import ScoreStars from "./ScoreStars";
import ScoreText from "./ScoreText";
import Constants from "../../../../../Utilities/Constants";
import {
  ScorePillInnerContainer,
  ScorePillOuterContainer
} from "./ScorePillStyles";
import { useRecoilValue } from "recoil";
import modeAtom from "../../../../../Stores/Classroom/mode";

const ScorePill = ({ score }) => {
  const mode = useRecoilValue(modeAtom);
  let borderColor; // 점수에 따른 테두리 색상
  switch (mode) {
    case "story":
      if (score >= Constants.EXCELLENT_THRESHOLD) {
        borderColor = Constants.TURQUOISE;
      } else if (score >= Constants.GOOD_THRESHOLD) {
        borderColor = Constants.TANGERINE;
      } else {
        borderColor = Constants.RED;
      }
      break;
    case "word":
      if (score >= Constants.WORD_EXCELLENT_THRESHOLD) {
        borderColor = Constants.TURQUOISE;
      } else if (score >= Constants.WORD_GOOD_THRESHOLD) {
        borderColor = Constants.TANGERINE;
      } else {
        borderColor = Constants.RED;
      }
      break;
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
