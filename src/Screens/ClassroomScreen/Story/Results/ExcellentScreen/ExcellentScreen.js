import { useRecoilState } from "recoil";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";
import ScorePill from "../Score/ScorePill";
import { Slide } from "@mui/material";
import {
  ExcellentImage,
  ExcellentScreenContainer
} from "./ExcellentScreenStyles";

const ExcellentScreen = () => {
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  return (
    <Slide direction={`up`} in={true} mountOnEnter={true} unmountOnExit={true}>
      <ExcellentScreenContainer>
        <ExcellentImage
          src={`/assets/images/excellent_bat.png`}
          alt={`Excellent bat`}
        />
        <ScorePill />
        <p>{totalScore.score}</p>
      </ExcellentScreenContainer>
    </Slide>
  );
};

export default ExcellentScreen;
