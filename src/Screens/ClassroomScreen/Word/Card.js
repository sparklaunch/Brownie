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
  WordContainer,
  WordLeftPageTurnerContainer,
  WordResultsContainer,
  WordRightPageTurnerContainer,
  WordWaveContainer
} from "./CardStyles";
import Instructions from "./Instructions";
import Pagination from "./Pagination";
import ModeButtons from "../Mode/ModeButtons";
import WordLeftPageTurner from "./Pager/WordLeftPageTurner";
import WordRightPageTurner from "./Pager/WordRightPageTurner";
import CardTitle from "./CardTitle";
import HomeButton from "../HomeButton";
import Microphone from "./Microphone/Microphone";
import WordImage from "./WordImage";
import WordCard from "./WordCard";
import WordWave from "./WordWave";
import ResultsScreen from "../Story/Results/ResultsScreen";
import WordResults from "./Results/WordResults";

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
      <WordContainer>
        {wordMicrophoneState === "completed" ? <WordImage /> : <WordCard />}
      </WordContainer>
      <InsetBorderContainer>
        <InsetBorder />
      </InsetBorderContainer>
      <InstructionsContainer>
        <Instructions />
      </InstructionsContainer>
      <PaginationContainer>
        <Pagination />
      </PaginationContainer>
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
      {resultsScreenShown && <ResultsScreen />}
      {wordScores[`${level}-${currentWordPage}`] !== undefined && (
        <WordResultsContainer>
          <WordResults score={wordScores[`${level}-${currentWordPage}`]} />
        </WordResultsContainer>
      )}
      {wordMicrophoneState === "recording" && (
        <WordWaveContainer>
          <WordWave />
        </WordWaveContainer>
      )}
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
