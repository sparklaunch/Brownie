import { useRecoilState } from "recoil";
import totalScoreAtom from "../../../../Stores/Classroom/Story/totalScore";
import ExcellentScreen from "./ExcellentScreen/ExcellentScreen";
import GoodScreen from "./GoodScreen/GoodScreen";
import NiceTryScreen from "./NiceTryScreen/NiceTryScreen";

const ResultsScreen = () => {
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  if (totalScore.score >= 50) {
    return <ExcellentScreen />;
  } else if (totalScore.score >= 20) {
    return <GoodScreen />;
  } else {
    return <NiceTryScreen />;
  }
};

export default ResultsScreen;
