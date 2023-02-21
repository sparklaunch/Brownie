import { useRecoilState } from "recoil";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";
import ScorePill from "../Score/ScorePill";
import { Slide } from "@mui/material";
import { NiceTryImage, NiceTryScreenContainer } from "./NiceTryScreenStyles";

const NiceTryScreen = () => {
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  console.log(totalScore.score);
  return (
    <Slide direction={`up`} in={true} mountOnEnter={true} unmountOnExit={true}>
      <NiceTryScreenContainer>
        <NiceTryImage
          src={`/assets/images/nicetry_frog.png`}
          alt={`Nice Try Frog`}
        />
        <ScorePill />
        <p>{totalScore.score}</p>
      </NiceTryScreenContainer>
    </Slide>
  );
};

export default NiceTryScreen;
