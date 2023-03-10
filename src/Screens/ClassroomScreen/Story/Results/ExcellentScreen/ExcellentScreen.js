import { useRecoilValue } from "recoil";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";
import ScorePill from "../Score/ScorePill";
import { Fade } from "@mui/material";
import {
  ExcellentImage,
  ExcellentScreenContainer,
  ScorePillWrapper
} from "./ExcellentScreenStyles";
import modeAtom from "../../../../../Stores/Classroom/mode";

const ExcellentScreen = () => {
  const totalScore = useRecoilValue(totalScoreAtom);
  const mode = useRecoilValue(modeAtom);
  return (
    <Fade in={true} timeout={500}>
      <ExcellentScreenContainer isWordMode={mode === "word"}>
        <ExcellentImage
          src={`/assets/images/excellent_bat.png`}
          alt={`Excellent bat`}
        />
        <ScorePillWrapper>
          <ScorePill score={totalScore.score} />
        </ScorePillWrapper>
      </ExcellentScreenContainer>
    </Fade>
  );
};

export default ExcellentScreen;
