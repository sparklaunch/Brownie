import { useRecoilState } from "recoil";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";
import ScorePill from "../Score/ScorePill";
import { Slide } from "@mui/material";

const GoodScreen = () => {
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  return (
    <Slide direction={`up`} in={true} mountOnEnter={true} unmountOnExit={true}>
      <div
        className={`absolute bottom-0 left-0 right-0 h-[240px] bg-[#FFC767] p-8 z-[3] rounded-b-2xl`}
      >
        <img
          src={`/assets/images/good_monkey.png`}
          alt={`Good Monkey`}
          className={`absolute top-[50%] translate-y-[-50%] left-[10%] h-[200px] w-[185px] scale-[0.8]`}
        />
        <ScorePill />
        <p>{totalScore.score}</p>
      </div>
    </Slide>
  );
};

export default GoodScreen;
