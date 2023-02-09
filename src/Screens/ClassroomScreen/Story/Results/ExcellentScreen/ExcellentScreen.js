import { useRecoilState } from "recoil";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";
import ScorePill from "../Score/ScorePill";

const ExcellentScreen = () => {
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 h-[240px] bg-[#80E6AC] p-8`}
    >
      <img
        src={`/assets/images/excellent_bat.png`}
        alt={`Excellent bat`}
        className={`absolute top-[50%] translate-y-[-50%] right-0 h-[200px] w-[300px]`}
      />
      <ScorePill />
      <p>{totalScore.score}</p>
    </div>
  );
};

export default ExcellentScreen;
