import { useRecoilState } from "recoil";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";
import ScorePill from "../Score/ScorePill";
import { Slide } from "@mui/material";
import { GoodImage, GoodScreenContainer } from "./GoodScreenStyles";

const GoodScreen = () => {
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  return (
    <Slide direction={`up`} in={true} mountOnEnter={true} unmountOnExit={true}>
      <GoodScreenContainer>
        <GoodImage src={`/assets/images/good_monkey.png`} alt={`Good Monkey`} />
        <ScorePill />
        <p>{totalScore.score}</p>
      </GoodScreenContainer>
    </Slide>
  );
};

export default GoodScreen;
