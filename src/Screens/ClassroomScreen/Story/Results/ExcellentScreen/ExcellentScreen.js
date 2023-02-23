import { useRecoilState } from "recoil";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";
import ScorePill from "../Score/ScorePill";
import { Fade } from "@mui/material";
import {
  ExcellentImage,
  ExcellentScreenContainer
} from "./ExcellentScreenStyles";
import modeAtom from "../../../../../Stores/Classroom/mode";

const ExcellentScreen = () => {
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  const [mode, setMode] = useRecoilState(modeAtom);
  return (
    <Fade in={true} timeout={500}>
      <ExcellentScreenContainer isWordMode={mode === "word"}>
        <ScorePill />
        <ExcellentImage
          src={`/assets/images/excellent_bat.png`}
          alt={`Excellent bat`}
        />
        <p>{totalScore.score}</p>
      </ExcellentScreenContainer>
    </Fade>
  );
};

export default ExcellentScreen;
