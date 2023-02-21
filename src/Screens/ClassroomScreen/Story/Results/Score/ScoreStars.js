import { useRecoilState } from "recoil";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";
import ScoreStar from "./ScoreStar";
import Constants from "../../../../../Utilities/Constants";

const ScoreStars = () => {
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  return (
    <div className={`flex flex-row`}>
      <ScoreStar filled={true} />
      <ScoreStar filled={totalScore.score >= Constants.GOOD_THRESHOLD} />
      <ScoreStar filled={totalScore.score >= Constants.EXCELLENT_THRESHOLD} />
    </div>
  );
};

export default ScoreStars;
