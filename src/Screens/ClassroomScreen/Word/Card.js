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
  CardInnerContainer,
  CardOuterContainer,
  CardTitleContainer,
  HomeButtonContainer,
  InsetBorderContainer,
  InstructionsContainer,
  LoadingIndicatorContainer,
  MicrophoneContainer,
  ModeButtonsContainer,
  PaginationContainer,
  WordContainer,
  WordLeftPageTurnerContainer,
  WordResultsContainer,
  WordRightPageTurnerContainer,
  WordWaveContainer,
  YouDidItScreenContainer
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
import YouDidItScreen from "../Story/Results/YouDidIt/YouDidItScreen";
import LoadingCard from "../LoadingCard";
import ScorePill from "../Story/Results/Score/ScorePill";
import textbookSizeAtom from "../../../Stores/Misc/textbookSize";
import mediaRecorderAtom from "../../../Stores/Misc/mediaRecorder";
import useData from "../../../Hooks/useData";
import { Howl } from "howler";
import _ from "lodash";
import shouldAudioPlayAtom from "../../../Stores/Classroom/shouldAudioPlay";

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
  const [textbookSize, setTextbookSize] = useRecoilState(textbookSizeAtom);
  const [mediaRecorder, setMediaRecorder] = useRecoilState(mediaRecorderAtom);
  const [shouldAudioPlay, setShouldAudioPlay] =
    useRecoilState(shouldAudioPlayAtom);
  const onClickWave = async () => {
    try {
      setWordMicrophoneState(`loading`);
      mediaRecorder.stop();
    } catch (error) {
      console.log(error);
    }
  };
  const words = useData("words");
  const playWordAudio = () => {
    if (shouldAudioPlay) {
      const audio = new Howl({
        src: [`/assets/audio/words/${words[currentWordPage - 1]}.wav`]
      });
      audio.play();
    }
  };
  const onClickWord = () => {
    return _.throttle(playWordAudio, 1000, { leading: true, trailing: true });
  };
  return (
    <CardOuterContainer>
      <CardInnerContainer textbookSize={textbookSize}>
        <InsetBorderContainer>
          <InsetBorder />
        </InsetBorderContainer>
        <WordContainer onClick={onClickWord()}>
          {wordMicrophoneState === "completed" ? <WordImage /> : <WordCard />}
        </WordContainer>
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
            <ScorePill score={wordScores[`${level}-${currentWordPage}`]} />
          </WordResultsContainer>
        )}
        {wordMicrophoneState === "recording" && (
          <WordWaveContainer onClick={onClickWave}>
            <WordWave />
          </WordWaveContainer>
        )}
        {wordMicrophoneState === "loading" && (
          <LoadingIndicatorContainer>
            <LoadingCard />
          </LoadingIndicatorContainer>
        )}
        <MicrophoneContainer>
          <Microphone />
        </MicrophoneContainer>
        {youDidItShown && (
          <YouDidItScreenContainer>
            <YouDidItScreen />
          </YouDidItScreenContainer>
        )}
      </CardInnerContainer>
    </CardOuterContainer>
  );
};

export default Card;
