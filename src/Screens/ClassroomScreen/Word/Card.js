import wordResultsShownAtom from "../../../Stores/Classroom/Word/wordResultsShown";
import { useRecoilState } from "recoil";
import wordMicrophoneStateAtom from "../../../Stores/Classroom/Word/wordMicrophoneState";
import resultsScreenShownAtom from "../../../Stores/Classroom/Story/resultsScreenShown";
import wordScoresAtom from "../../../Stores/Classroom/Word/wordScores";
import { useParams } from "react-router-dom";
import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";
import youDidItShownAtom from "../../../Stores/Classroom/youDidItShown";
import InsetBorder from "./InsetBorder";
import {
  CardOuterContainer,
  InsetBorderContainer,
  InstructionsContainer,
  PaginationContainer
} from "./CardStyles";
import Instructions from "./Instructions";
import Pagination from "./Pagination";

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
    <CardOuterContainer>
      <InsetBorderContainer>
        <InsetBorder />
      </InsetBorderContainer>
      <InstructionsContainer>
        <Instructions />
      </InstructionsContainer>
      <PaginationContainer>
        <Pagination />
      </PaginationContainer>
      {/*<div*/}
      {/*  className={`absolute top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-center`}*/}
      {/*>*/}
      {/*  {wordMicrophoneState === "completed" ? <WordImage /> : <WordCard />}*/}
      {/*</div>*/}
      {/*<div className={`absolute top-[20px] desktop:top-0 left-[-120px]`}>*/}
      {/*  <ModeButtons />*/}
      {/*</div>*/}
      {/*<div*/}
      {/*  className={`absolute left-[-80px] bottom-[30px] desktop:top-[50%] desktop:left-[-80px] desktop:translate-y-[-50%]`}*/}
      {/*>*/}
      {/*  <WordLeftPageTurner />*/}
      {/*</div>*/}
      {/*<div*/}
      {/*  className={`absolute right-[-80px] bottom-[30px] desktop:top-[50%] desktop:right-[-80px] desktop:translate-y-[-50%]`}*/}
      {/*>*/}
      {/*  <WordRightPageTurner />*/}
      {/*</div>*/}
      {/*<div className={`absolute top-[-50px] left-0`}>*/}
      {/*  <CardTitle />*/}
      {/*</div>*/}
      {/*<div*/}
      {/*  className={`absolute top-[20px] right-[-110px] desktop:top-[-60px] desktop:right-[-100px]`}*/}
      {/*>*/}
      {/*  <HomeButton />*/}
      {/*</div>*/}
      {/*{resultsScreenShown && (*/}
      {/*  <div>*/}
      {/*    <ResultsScreen />*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*{wordScores[`${level}-${currentWordPage}`] !== undefined && (*/}
      {/*  <div className={`absolute top-0 left-[50%] translate-x-[-50%]`}>*/}
      {/*    <WordResults score={wordScores[`${level}-${currentWordPage}`]} />*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*{wordMicrophoneState === "recording" && (*/}
      {/*  <div className={`absolute left-[50%] translate-x-[-50%] bottom-0`}>*/}
      {/*    <WordWave />*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*{youDidItShown && (*/}
      {/*  <div className={`absolute top-0 left-0 bottom-0 right-0`}>*/}
      {/*    <YouDidItScreen />*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*<Microphone />*/}
    </CardOuterContainer>
  );
};

export default Card;
