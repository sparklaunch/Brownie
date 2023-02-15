import Instructions from "./Instructions";
import WordCard from "./WordCard";
import Pagination from "./Pagination";
import Microphone from "./Microphone/Microphone";
import ModeButtons from "../Mode/ModeButtons";
import WordLeftPageTurner from "./Pager/WordLeftPageTurner";
import WordRightPageTurner from "./Pager/WordRightPageTurner";
import CardTitle from "./CardTitle";
import HomeButton from "../HomeButton";
import wordResultsShownAtom from "../../../Stores/Classroom/Word/wordResultsShown";
import { useRecoilState } from "recoil";
import WordResults from "./Results/WordResults";
import wordMicrophoneStateAtom from "../../../Stores/Classroom/Word/wordMicrophoneState";
import WordImage from "./WordImage";
import WordWave from "./WordWave";
import resultsScreenShownAtom from "../../../Stores/Classroom/Story/resultsScreenShown";
import ResultsScreen from "../Story/Results/ResultsScreen";

const Card = () => {
  const [wordResultsShown, setWordResultsShown] =
    useRecoilState(wordResultsShownAtom);
  const [wordMicrophoneState, setWordMicrophoneState] = useRecoilState(
    wordMicrophoneStateAtom
  );
  const [resultsScreenShown, setResultsScreenShown] = useRecoilState(
    resultsScreenShownAtom
  );
  return (
    <div
      className={`absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center overflow-clip`}
    >
      <div
        className={`w-[94vh] h-[62vh] relative bg-white rounded-2xl shadow-2xl`}
      >
        <div className={`absolute top-[20px] left-[20px]`}>
          <Instructions />
        </div>
        <div className={`absolute top-[20px] right-[20px]`}>
          <Pagination />
        </div>
        <div
          className={`absolute top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-center`}
        >
          {wordMicrophoneState === "completed" ? <WordImage /> : <WordCard />}
        </div>
        <div className={`absolute top-0 left-[-120px]`}>
          <ModeButtons />
        </div>
        <div className={`absolute top-[50%] left-[-80px] translate-y-[-50%]`}>
          <WordLeftPageTurner />
        </div>
        <div className={`absolute top-[50%] right-[-80px] translate-y-[-50%]`}>
          <WordRightPageTurner />
        </div>
        <div className={`absolute top-[-50px] left-0`}>
          <CardTitle />
        </div>
        <div className={`absolute top-[-60px] right-[-100px]`}>
          <HomeButton />
        </div>
        {resultsScreenShown && (
          <div>
            <ResultsScreen />
          </div>
        )}
        {wordMicrophoneState === "recording" && (
          <div className={`absolute left-[50%] translate-x-[-50%] bottom-0`}>
            <WordWave />
          </div>
        )}
        {wordResultsShown && <WordResults />}
        <Microphone />
      </div>
    </div>
  );
};

export default Card;
