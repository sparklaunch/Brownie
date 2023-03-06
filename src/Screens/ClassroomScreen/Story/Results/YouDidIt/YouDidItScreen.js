import YouDidItText from "./YouDidItText";
import ResultsBackDrop from "./ResultsBackDrop";
import ReadingMonkey from "./ReadingMonkey";
import Confetti from "./Confetti";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import completedLevelsAtom from "../../../../../Stores/Catalog/completedLevels";
import { useParams } from "react-router-dom";

const YouDidItScreen = () => {
  const { level } = useParams();
  const setCompletedLevels = useSetRecoilState(completedLevelsAtom);
  useEffect(() => {
    setCompletedLevels((previousCompletedLevels) => {
      const newCompletedLevels = [...previousCompletedLevels, level];
      return [...new Set(newCompletedLevels)];
    });
  }, []);
  return (
    <>
      <ResultsBackDrop />
      <YouDidItText />
      <Confetti />
      <ReadingMonkey />
    </>
  );
};

export default YouDidItScreen;
