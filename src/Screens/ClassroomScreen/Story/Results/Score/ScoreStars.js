import { useRecoilState } from "recoil";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";
import ScoreStar from "./ScoreStar";

const ScoreStars = () => {
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  return (
    <div className={`flex flex-row`}>
      <ScoreStar filled={true} />
      <ScoreStar filled={totalScore.score >= 40} />
      <ScoreStar filled={totalScore.score >= 70} />
    </div>
  );
};

export default ScoreStars;
