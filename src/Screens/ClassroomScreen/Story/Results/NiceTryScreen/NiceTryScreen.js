import { useRecoilState } from "recoil";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";
import ScorePill from "../Score/ScorePill";
import { Fade } from "@mui/material";
import { NiceTryImage, NiceTryScreenContainer } from "./NiceTryScreenStyles";

const NiceTryScreen = () => {
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  return (
    <Fade in={true} timeout={500}>
      <NiceTryScreenContainer>
        <NiceTryImage
          src={`/assets/images/nicetry_frog.png`}
          alt={`Nice Try Frog`}
        />
        <ScorePill />
        <p>{totalScore.score}</p>
      </NiceTryScreenContainer>
    </Fade>
  );
};

export default NiceTryScreen;
