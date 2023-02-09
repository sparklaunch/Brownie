import { useRecoilState } from "recoil";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";

const ScoreText = () => {
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  if (totalScore.score >= 50) {
    return (
      <p className={`text-[36px] font-[Jua] text-[#15B58F]`}>Excellent!</p>
    );
  } else if (totalScore.score >= 20) {
    return <p className={`text-[36px] font-[Jua] text-[#FF8200]`}>Good!</p>;
  } else {
    return <p className={`text-[36px] font-[Jua] text-[#FF2442]`}>Nice Try!</p>;
  }
};

export default ScoreText;