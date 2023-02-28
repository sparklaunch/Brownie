import Constants from "../../../../../Utilities/Constants";
import { ScoreTextString } from "./ScoreTextStyles";
import modeAtom from "../../../../../Stores/Classroom/mode";
import { useRecoilState } from "recoil";

const ScoreText = ({ score }) => {
  const [mode, setMode] = useRecoilState(modeAtom);
  switch (mode) {
    case "story":
      if (score >= Constants.EXCELLENT_THRESHOLD) {
        return (
          <ScoreTextString textColor={`#15B58F`}>Excellent!</ScoreTextString>
        );
      } else if (score >= Constants.GOOD_THRESHOLD) {
        return <ScoreTextString textColor={`#FF8200`}>Good!</ScoreTextString>;
      } else {
        return (
          <ScoreTextString textColor={`#FF2442`}>Nice Try!</ScoreTextString>
        );
      }
    case "word":
      if (score >= Constants.WORD_EXCELLENT_THRESHOLD) {
        return (
          <ScoreTextString textColor={`#15B58F`}>Excellent!</ScoreTextString>
        );
      } else if (score >= Constants.WORD_GOOD_THRESHOLD) {
        return <ScoreTextString textColor={`#FF8200`}>Good!</ScoreTextString>;
      } else {
        return (
          <ScoreTextString textColor={`#FF2442`}>Nice Try!</ScoreTextString>
        );
      }
  }
};

export default ScoreText;
