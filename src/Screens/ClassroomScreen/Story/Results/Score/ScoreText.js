import { useRecoilState } from "recoil";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";

const ScoreText = () => {
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  if (totalScore.score >= 70) {
    return (
      <p className={`text-[36px] font-[Jua] text-[#15B58F] ml-3`}>Excellent!</p>
    );
  } else if (totalScore.score >= 40) {
    return (
      <p className={`text-[36px] font-[Jua] text-[#FF8200] ml-3`}>Good!</p>
    );
  } else {
    return (
      <p className={`text-[36px] font-[Jua] text-[#FF2442] ml-3`}>Nice Try!</p>
    );
  }
};

export default ScoreText;
