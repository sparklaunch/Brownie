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
  CardTitleContainer,
  HomeButtonContainer,
  InsetBorderContainer,
  InstructionsContainer,
  MicrophoneContainer,
  ModeButtonsContainer,
  PaginationContainer,
  WordLeftPageTurnerContainer,
  WordRightPageTurnerContainer
} from "./CardStyles";
import Instructions from "./Instructions";
import Pagination from "./Pagination";
import ModeButtons from "../Mode/ModeButtons";
import WordLeftPageTurner from "./Pager/WordLeftPageTurner";
import WordRightPageTurner from "./Pager/WordRightPageTurner";
import CardTitle from "./CardTitle";
import HomeButton from "../HomeButton";
import Microphone from "./Microphone/Microphone";

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
      <ModeButtonsContainer>
        <ModeButtons />
      </ModeButtonsContainer>
      <WordLeftPageTurnerContainer>
        <WordLeftPageTurner />
      </WordLeftPageTurnerContainer>
      <WordRightPageTurnerContainer>
        <WordRightPageTurner />
      </WordRightPageTurnerContainer>
      <CardTitleContainer>
        <CardTitle />
      </CardTitleContainer>
      <HomeButtonContainer>
        <HomeButton />
      </HomeButtonContainer>
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
      <MicrophoneContainer>
        <Microphone />
      </MicrophoneContainer>
    </CardOuterContainer>
  );
};

export default Card;
