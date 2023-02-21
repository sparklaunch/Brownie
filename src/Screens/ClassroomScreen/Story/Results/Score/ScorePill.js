import ScoreStars from "./ScoreStars";
import ScoreText from "./ScoreText";
import { useRecoilState } from "recoil";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";
import Constants from "../../../../../Utilities/Constants";

const ScorePill = () => {
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  let borderColor;
  if (totalScore.score >= Constants.EXCELLENT_THRESHOLD) {
    borderColor = `border-[#15B58F]`;
  } else if (totalScore.score >= Constants.GOOD_THRESHOLD) {
    borderColor = `border-[#FF8200]`;
  } else {
    borderColor = `border-[#FF2442]`;
  }
  return (
    <div
      className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] scale-[0.8]`}
    >
      <div
        className={`flex flex-row items-center justify-center bg-white rounded-full px-8 py-1 border-2 shadow-lg ${borderColor}`}
      >
        <ScoreStars />
        <ScoreText />
      </div>
    </div>
  );
};

export default ScorePill;
