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
import wordScoresAtom from "../../../Stores/Classroom/Word/wordScores";
import { useParams } from "react-router-dom";
import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";
import youDidItShownAtom from "../../../Stores/Classroom/youDidItShown";
import YouDidItScreen from "../Story/Results/YouDidIt/YouDidItScreen";
import InsetBorder from "./InsetBorder";

const Card = () => {
  const { level } = useParams();
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const [wordResultsShown, setWordResultsShown] =
    useRecoilState(wordResultsShownAtom);
  const [wordMicrophoneState, setWordMicrophoneState] = useRecoilState(
    wordMicrophoneStateAtom
  );
  const [wordScores, setWordScores] = useRecoilState(wordScoresAtom);
  const [resultsScreenShown, setResultsScreenShown] = useRecoilState(
    resultsScreenShownAtom
  );
  const [youDidItShown, setYouDidItShown] = useRecoilState(youDidItShownAtom);
  return (
    <div
      className={`absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center overflow-clip`}
    >
      <div
        className={`w-[75%] desktop:w-[94vh] h-full desktop:h-[62vh] relative bg-white desktop:rounded-2xl shadow-2xl`}
      >
        <div className={`absolute top-0 left-0 bottom-0 right-0`}>
          <InsetBorder />
        </div>
        <div className={`absolute top-[20px] left-[140px]`}>
          <Instructions />
        </div>
        <div className={`absolute top-0 left-0`}>
          <Pagination />
        </div>
        <div
          className={`absolute top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-center`}
        >
          {wordMicrophoneState === "completed" ? <WordImage /> : <WordCard />}
        </div>
        <div className={`absolute top-[20px] desktop:top-0 left-[-120px]`}>
          <ModeButtons />
        </div>
        <div
          className={`absolute left-[-80px] bottom-[30px] desktop:top-[50%] desktop:left-[-80px] desktop:translate-y-[-50%]`}
        >
          <WordLeftPageTurner />
        </div>
        <div
          className={`absolute right-[-80px] bottom-[30px] desktop:top-[50%] desktop:right-[-80px] desktop:translate-y-[-50%]`}
        >
          <WordRightPageTurner />
        </div>
        <div className={`absolute top-[-50px] left-0`}>
          <CardTitle />
        </div>
        <div
          className={`absolute top-[20px] right-[-110px] desktop:top-[-60px] desktop:right-[-100px]`}
        >
          <HomeButton />
        </div>
        {resultsScreenShown && (
          <div>
            <ResultsScreen />
          </div>
        )}
        {wordScores[`${level}-${currentWordPage}`] !== undefined && (
          <div className={`absolute top-0 left-[50%] translate-x-[-50%]`}>
            <WordResults score={wordScores[`${level}-${currentWordPage}`]} />
          </div>
        )}
        {wordMicrophoneState === "recording" && (
          <div className={`absolute left-[50%] translate-x-[-50%] bottom-0`}>
            <WordWave />
          </div>
        )}
        {youDidItShown && (
          <div className={`absolute top-0 left-0 bottom-0 right-0`}>
            <YouDidItScreen />
          </div>
        )}
        <Microphone />
      </div>
    </div>
  );
};

export default Card;
