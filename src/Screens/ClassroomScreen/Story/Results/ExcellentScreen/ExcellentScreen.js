import { useRecoilState } from "recoil";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";
import ScorePill from "../Score/ScorePill";
import { Fade } from "@mui/material";
import {
  ExcellentImage,
  ExcellentScreenContainer
} from "./ExcellentScreenStyles";

const ExcellentScreen = () => {
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  console.log(totalScore.score);
  return (
    <Fade in={true} timeout={500}>
      <ExcellentScreenContainer>
        <ExcellentImage
          src={`/assets/images/excellent_bat.png`}
          alt={`Excellent bat`}
        />
        <p>{totalScore.score}</p>
        <ScorePill />
      </ExcellentScreenContainer>
    </Fade>
  );
};

export default ExcellentScreen;
