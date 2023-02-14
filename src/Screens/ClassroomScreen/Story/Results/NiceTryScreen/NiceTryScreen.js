import { useRecoilState } from "recoil";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";
import ScorePill from "../Score/ScorePill";
import { Slide } from "@mui/material";

const NiceTryScreen = () => {
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  return (
    <Slide direction={`up`} in={true} mountOnEnter={true} unmountOnExit={true}>
      <div
        className={`absolute bottom-0 left-0 right-0 h-[240px] bg-[#FF92AC] p-8 z-[3] rounded-b-2xl`}
      >
        <img
          src={`/assets/images/nicetry_frog.png`}
          alt={`Nice Try Frog`}
          className={`absolute top-[50%] translate-y-[-50%] right-[5%] h-[200px] w-[215px]`}
        />
        <ScorePill />
        <p>{totalScore.score}</p>
      </div>
    </Slide>
  );
};

export default NiceTryScreen;
