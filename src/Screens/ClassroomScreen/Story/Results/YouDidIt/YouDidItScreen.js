import YouDidItText from "./YouDidItText";
import ResultsBackDrop from "./ResultsBackDrop";
import ReadingMonkey from "./ReadingMonkey";
import Confetti from "./Confetti";

const YouDidItScreen = () => {
  return (
    <div>
      <ResultsBackDrop />
      <YouDidItText />
      <Confetti />
      <ReadingMonkey />
    </div>
  );
};

export default YouDidItScreen;
