import { useRecoilState } from "recoil";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";
import ScorePill from "../Score/ScorePill";
import { Fade } from "@mui/material";
import {
  NiceTryImage,
  NiceTryScreenContainer,
  ScorePillWrapper
} from "./NiceTryScreenStyles";
import modeAtom from "../../../../../Stores/Classroom/mode";

const NiceTryScreen = () => {
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  const [mode, setMode] = useRecoilState(modeAtom);
  return (
    <Fade in={true} timeout={500}>
      <NiceTryScreenContainer isWordMode={mode === "word"}>
        <NiceTryImage
          src={`/assets/images/nicetry_frog.png`}
          alt={`Nice Try Frog`}
        />
        <ScorePillWrapper>
          <ScorePill />
        </ScorePillWrapper>
        <p>{totalScore.score}</p>
      </NiceTryScreenContainer>
    </Fade>
  );
};

export default NiceTryScreen;
