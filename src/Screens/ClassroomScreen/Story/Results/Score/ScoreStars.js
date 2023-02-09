import { useRecoilState } from "recoil";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";
import ScoreStar from "./ScoreStar";

const ScoreStars = () => {
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  return (
    <div>
      <ScoreStar filled={true} />
    </div>
  );
};

export default ScoreStars;
