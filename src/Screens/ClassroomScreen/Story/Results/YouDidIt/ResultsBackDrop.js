import { ResultsBackDropContainer } from "./ResultsBackDropStyles";
import { useRecoilValue } from "recoil";
import modeAtom from "../../../../../Stores/Classroom/mode";

const ResultsBackDrop = () => {
  const mode = useRecoilValue(modeAtom);
  return <ResultsBackDropContainer isWordMode={mode === "word"} />;
};

export default ResultsBackDrop;
