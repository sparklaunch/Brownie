import { useRecoilState } from "recoil";
import totalScoreAtom from "../../../../Stores/Classroom/Story/totalScore";
import ExcellentScreen from "./ExcellentScreen/ExcellentScreen";
import GoodScreen from "./GoodScreen/GoodScreen";
import NiceTryScreen from "./NiceTryScreen/NiceTryScreen";
import { useEffect } from "react";
import resultsScreenShownAtom from "../../../../Stores/Classroom/Story/resultsScreenShown";
import leftMicrophoneStateAtom from "../../../../Stores/Classroom/Story/Microphones/leftMicrophoneState";

const ResultsScreen = () => {
  const [resultsScreenShown, setResultsScreenShown] = useRecoilState(
    resultsScreenShownAtom
  );
  const [leftMicrophoneState, setLeftMicrophoneState] = useRecoilState(
    leftMicrophoneStateAtom
  );
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  useEffect(() => {
    new Audio(`/assets/audio/results_shown.mp3`).play();
    setTimeout(() => {
      setResultsScreenShown(false);
      setLeftMicrophoneState("completed");
    }, 3000);
  }, []);
  if (resultsScreenShown) {
    if (totalScore.score >= 50) {
      return <ExcellentScreen />;
    } else if (totalScore.score >= 20) {
      return <GoodScreen />;
    } else {
      return <NiceTryScreen />;
    }
  } else {
    return <></>;
  }
};

export default ResultsScreen;
