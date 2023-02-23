import { useRecoilState } from "recoil";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";
import ScorePill from "../Score/ScorePill";
import { Fade } from "@mui/material";
import { GoodImage, GoodScreenContainer } from "./GoodScreenStyles";

const GoodScreen = () => {
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  return (
    <Fade in={true} timeout={500}>
      <GoodScreenContainer>
        <GoodImage src={`/assets/images/good_monkey.png`} alt={`Good Monkey`} />
        <ScorePill />
        <p>{totalScore.score}</p>
      </GoodScreenContainer>
    </Fade>
  );
};

export default GoodScreen;
