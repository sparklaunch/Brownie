import ScoreStars from "./ScoreStars";
import ScoreText from "./ScoreText";
import Constants from "../../../../../Utilities/Constants";
import {
  ScorePillInnerContainer,
  ScorePillOuterContainer
} from "./ScorePillStyles";
import { useRecoilState } from "recoil";
import modeAtom from "../../../../../Stores/Classroom/mode";

const ScorePill = ({ score }) => {
  const [mode, setMode] = useRecoilState(modeAtom);
  let borderColor;
  switch (mode) {
    case "story":
      if (score >= Constants.EXCELLENT_THRESHOLD) {
        borderColor = Constants.TURQUOISE;
      } else if (score >= Constants.GOOD_THRESHOLD) {
        borderColor = `#FF8200`;
      } else {
        borderColor = `#FF2442`;
      }
      break;
    case "word":
      if (score >= Constants.WORD_EXCELLENT_THRESHOLD) {
        borderColor = Constants.TURQUOISE;
      } else if (score >= Constants.WORD_GOOD_THRESHOLD) {
        borderColor = `#FF8200`;
      } else {
        borderColor = `#FF2442`;
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
