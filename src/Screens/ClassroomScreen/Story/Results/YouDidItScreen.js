import YouDidItText from "./YouDidItText";
import ResultsBackDrop from "./ResultsBackDrop";
import ReadingMonkey from "./ReadingMonkey";
import Confetti from "./Confetti";
import { useEffect } from "react";

const YouDidItScreen = () => {
  useEffect(() => {
    new Audio(`/assets/audio/you_did_it.mp3`).play();
  }, []);
  return (
    <div className={`absolute top-0 left-0 bottom-0 right-0`}>
      <ResultsBackDrop />
      <YouDidItText />
      <Confetti />
      <ReadingMonkey />
    </div>
  );
};

export default YouDidItScreen;
