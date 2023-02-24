import Constants from "../../../../../Utilities/Constants";
import { ScoreTextString } from "./ScoreTextStyles";

const ScoreText = ({ score }) => {
  if (score >= Constants.EXCELLENT_THRESHOLD) {
    return <ScoreTextString textColor={`#15B58F`}>Excellent!</ScoreTextString>;
  } else if (score >= Constants.GOOD_THRESHOLD) {
    return <ScoreTextString textColor={`#FF8200`}>Good!</ScoreTextString>;
  } else {
    return <ScoreTextString textColor={`#FF2442`}>Nice Try!</ScoreTextString>;
  }
};

export default ScoreText;
