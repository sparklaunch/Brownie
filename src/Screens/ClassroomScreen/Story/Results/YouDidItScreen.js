import YouDidItText from "./YouDidItText";
import ResultsBackDrop from "./ResultsBackDrop";
import ReadingMonkey from "./ReadingMonkey";
import Confetti from "./Confetti";

const YouDidItScreen = () => {
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
