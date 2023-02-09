import { useRecoilState } from "recoil";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";
import ScorePill from "../Score/ScorePill";

const GoodScreen = () => {
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 h-[240px] bg-[#FFC767] p-8`}
    >
      <img
        src={`/assets/images/good_monkey.png`}
        alt={`Good Monkey`}
        className={`absolute top-[50%] translate-y-[-50%] left-[10%] h-[200px] w-[185px]`}
      />
      <ScorePill />
      <p>{totalScore.score}</p>
    </div>
  );
};

export default GoodScreen;
