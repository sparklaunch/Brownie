import Constants from "../../../../../Utilities/Constants";
import { ScoreTextString } from "./ScoreTextStyles";
import modeAtom from "../../../../../Stores/Classroom/mode";
import { useRecoilValue } from "recoil";

const ScoreText = ({ score }) => {
  const mode = useRecoilValue(modeAtom);
  switch (mode) {
    case "story":
      if (score >= Constants.EXCELLENT_THRESHOLD) {
        return (
          <ScoreTextString textColor={Constants.TURQUOISE}>
            Excellent!
          </ScoreTextString>
        );
      } else if (score >= Constants.GOOD_THRESHOLD) {
        return (
          <ScoreTextString textColor={Constants.TANGERINE}>
            Good!
          </ScoreTextString>
        );
      } else {
        return (
          <ScoreTextString textColor={Constants.RED}>Nice Try!</ScoreTextString>
        );
      }
    case "word":
      if (score >= Constants.WORD_EXCELLENT_THRESHOLD) {
        return (
          <ScoreTextString textColor={Constants.TURQUOISE}>
            Excellent!
          </ScoreTextString>
        );
      } else if (score >= Constants.WORD_GOOD_THRESHOLD) {
        return (
          <ScoreTextString textColor={Constants.TANGERINE}>
            Good!
          </ScoreTextString>
        );
      } else {
        return (
          <ScoreTextString textColor={Constants.RED}>Nice Try!</ScoreTextString>
        );
      }
  }
};

export default ScoreText;
