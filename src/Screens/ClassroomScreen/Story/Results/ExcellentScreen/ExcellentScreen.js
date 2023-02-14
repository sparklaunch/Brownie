import { useRecoilState } from "recoil";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";
import ScorePill from "../Score/ScorePill";
import { Slide } from "@mui/material";

const ExcellentScreen = () => {
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  return (
    <Slide direction={`up`} in={true} mountOnEnter={true} unmountOnExit={true}>
      <div
        className={`absolute bottom-0 left-0 right-0 h-[240px] bg-[#80E6AC] p-8 z-[3]`}
      >
        <img
          src={`/assets/images/excellent_bat.png`}
          alt={`Excellent bat`}
          className={`absolute top-[50%] translate-y-[-50%] right-0 h-[200px] w-[300px]`}
        />
        <ScorePill />
        <p>{totalScore.score}</p>
      </div>
    </Slide>
  );
};

export default ExcellentScreen;
