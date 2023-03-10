import { useRecoilValue } from "recoil";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";
import ScorePill from "../Score/ScorePill";
import { Fade } from "@mui/material";
import {
  GoodImage,
  GoodScreenContainer,
  ScorePillWrapper
} from "./GoodScreenStyles";
import modeAtom from "../../../../../Stores/Classroom/mode";

const GoodScreen = () => {
  const totalScore = useRecoilValue(totalScoreAtom);
  const mode = useRecoilValue(modeAtom);
  return (
    <Fade in={true} timeout={500}>
      <GoodScreenContainer isWordMode={mode === "word"}>
        <GoodImage src={`/assets/images/good_monkey.png`} alt={`Good Monkey`} />
        <ScorePillWrapper>
          <ScorePill score={totalScore.score} />
        </ScorePillWrapper>
      </GoodScreenContainer>
    </Fade>
  );
};

export default GoodScreen;
