import BookContent from "./BookContent";
import Microphones from "./Microphone/Microphones";
import { useRecoilState } from "recoil";
import resultsScreenShownAtom from "../../../Stores/Classroom/Story/resultsScreenShown";
import ResultsScreen from "./Results/ResultsScreen";

const Book = () => {
  const [resultsScreenShown, setResultsScreenShown] = useRecoilState(
    resultsScreenShownAtom
  );
  return (
    <div
      className={`absolute top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center`}
    >
      <div
        className={`relative w-[64%] h-[64*1/1.52%] bg-white rounded-xl shadow-2xl overflow-clip`}
      >
        <BookContent />
        {resultsScreenShown && <ResultsScreen />}
      </div>
      <Microphones />
    </div>
  );
};

export default Book;
