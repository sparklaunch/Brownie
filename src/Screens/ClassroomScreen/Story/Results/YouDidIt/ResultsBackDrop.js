import { ResultsBackDropContainer } from "./ResultsBackDropStyles";
import { useRecoilState } from "recoil";
import modeAtom from "../../../../../Stores/Classroom/mode";

const ResultsBackDrop = () => {
  const [mode, setMode] = useRecoilState(modeAtom);
  return <ResultsBackDropContainer isWordMode={mode === "word"} />;
};

export default ResultsBackDrop;
