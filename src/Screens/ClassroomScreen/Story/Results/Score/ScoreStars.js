import { useRecoilState } from "recoil";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";
import ScoreStar from "./ScoreStar";
import Constants from "../../../../../Utilities/Constants";
import { ScoreStarsContainer } from "./ScoreStarsStyles";

const ScoreStars = () => {
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  return (
    <ScoreStarsContainer>
      <ScoreStar filled={true} />
      <ScoreStar filled={totalScore.score >= Constants.GOOD_THRESHOLD} />
      <ScoreStar filled={totalScore.score >= Constants.EXCELLENT_THRESHOLD} />
    </ScoreStarsContainer>
  );
};

export default ScoreStars;
