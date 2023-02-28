import ScoreStar from "./ScoreStar";
import Constants from "../../../../../Utilities/Constants";
import { ScoreStarsContainer } from "./ScoreStarsStyles";
import modeAtom from "../../../../../Stores/Classroom/mode";
import { useRecoilState } from "recoil";

const ScoreStars = ({ score }) => {
  const [mode, setMode] = useRecoilState(modeAtom);
  switch (mode) {
    case "story":
      return (
        <ScoreStarsContainer>
          <ScoreStar filled={true} />
          <ScoreStar filled={score >= Constants.GOOD_THRESHOLD} />
          <ScoreStar filled={score >= Constants.EXCELLENT_THRESHOLD} />
        </ScoreStarsContainer>
      );
    case "word":
      return (
        <ScoreStarsContainer>
          <ScoreStar filled={true} />
          <ScoreStar filled={score >= Constants.WORD_GOOD_THRESHOLD} />
          <ScoreStar filled={score >= Constants.WORD_EXCELLENT_THRESHOLD} />
        </ScoreStarsContainer>
      );
  }
};

export default ScoreStars;
