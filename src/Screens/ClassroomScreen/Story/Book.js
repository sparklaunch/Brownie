import { useRecoilState } from "recoil";
import centralMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import youDidItShownAtom from "../../../Stores/Classroom/youDidItShown";
import {
  BookContainer,
  BookWrapper,
  CongratzContainer,
  FeedbackBarContainer,
  GlowBorder,
  HomeContainer,
  LeftClickable,
  LeftCompletedButtonsContainer,
  LeftPageImage,
  LeftPagerContainer,
  LeftPageShade,
  MicContainer,
  ModeSwitcherContainer,
  NavigatorContainer,
  PagerControllersContainer,
  RightCompletedButtonsContainer,
  RightPageImage,
  RightPagerContainer,
  RightPageShade,
  ScoreBarContainer,
  TextBookContainer,
  TextBookLeftPage,
  TextBookRightPage,
  UnitInfoContainer,
  WaveAnimationContainer
} from "./BookStyles";
import Navigator from "./Navigator/Navigator";
import resultsScreenShownAtom from "../../../Stores/Classroom/Story/resultsScreenShown";
import currentPageAtom from "../../../Stores/Classroom/Story/currentPage";
import useData from "../../../Hooks/useData";
import { useParams } from "react-router-dom";
import ModeButtons from "../Mode/ModeButtons";
import LeftPageTurner from "./Pager/LeftPageTurner";
import RightPageTurner from "./Pager/RightPageTurner";
import PageControllers from "./Controllers/PageControllers";
import HomeButton from "../HomeButton";
import CentralMicrophone from "./Microphone/Center/CentralMicrophone";
import BookTitle from "./BookTitle";
import Wave from "./Microphone/Center/Wave";
import ResultsScreen from "./Results/ResultsScreen";
import YouDidItScreen from "./Results/YouDidIt/YouDidItScreen";
import ScoreHeader from "./ScoreHeader";
import scoresAtom from "../../../Stores/Classroom/Story/scores";
import LeftCompletedMicrophone from "./Microphone/Center/LeftCompletedMicrophone";
import RightCompletedMicrophone from "./Microphone/Center/RightCompletedMicrophone";
import highlightedPageAtom from "../../../Stores/Classroom/Story/highlightedPage";
import highlightVisibleAtom from "../../../Stores/Classroom/Story/highlightVisible";

const Book = () => {
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  const [resultsScreenShown, setResultsScreenShown] = useRecoilState(
    resultsScreenShownAtom
  );
  const [youDidItShown, setYouDidItShown] = useRecoilState(youDidItShownAtom);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [scores, setScores] = useRecoilState(scoresAtom);
  const [highlightedPage, setHighlightedPage] =
    useRecoilState(highlightedPageAtom);
  const [highlightVisible, setHighlightVisible] =
    useRecoilState(highlightVisibleAtom);
  const { level } = useParams();
  const bookID = useData("id");
  return (
    <BookContainer>
      <NavigatorContainer>
        <Navigator />
      </NavigatorContainer>
      <BookWrapper>
        <TextBookContainer>
          <TextBookLeftPage>
            {currentPage === 0 ? (
              <LeftPageImage src={`/assets/images/pages/blank.jpg`} />
            ) : (
              <LeftPageImage
                src={`/assets/images/pages/${bookID}_${currentPage}.jpg`}
              />
            )}
            <LeftPageShade />
            {scores[`${level}-${currentPage}`] !== undefined && (
              <ScoreBarContainer>
                <ScoreHeader score={scores[`${level}-${currentPage}`]} />
              </ScoreBarContainer>
            )}
            {centralMicrophoneState === "completed" && currentPage !== 0 && (
              <LeftCompletedButtonsContainer>
                <LeftCompletedMicrophone />
              </LeftCompletedButtonsContainer>
            )}
            {highlightedPage === currentPage && highlightVisible && (
              <GlowBorder direction={`left`} />
            )}
            <LeftClickable />
          </TextBookLeftPage>
          <TextBookRightPage>
            {currentPage === 10 ? (
              <RightPageImage src={`/assets/images/pages/blank.jpg`} />
            ) : (
              <RightPageImage
                src={`/assets/images/pages/${bookID}_${currentPage + 1}.jpg`}
              />
            )}
            <RightPageShade />
            {scores[`${level}-${currentPage + 1}`] !== undefined && (
              <ScoreBarContainer>
                <ScoreHeader score={scores[`${level}-${currentPage + 1}`]} />
              </ScoreBarContainer>
            )}
            {centralMicrophoneState === "completed" && currentPage !== 10 && (
              <RightCompletedButtonsContainer>
                <RightCompletedMicrophone />
              </RightCompletedButtonsContainer>
            )}
            {highlightedPage === currentPage + 1 && highlightVisible && (
              <GlowBorder direction={`right`} />
            )}
          </TextBookRightPage>
          <ModeSwitcherContainer>
            <ModeButtons />
          </ModeSwitcherContainer>
          <LeftPagerContainer>
            <LeftPageTurner />
          </LeftPagerContainer>
          <RightPagerContainer>
            <RightPageTurner />
          </RightPagerContainer>
          <PagerControllersContainer>
            <PageControllers />
          </PagerControllersContainer>
          <HomeContainer>
            <HomeButton />
          </HomeContainer>
          <UnitInfoContainer>
            <BookTitle />
          </UnitInfoContainer>
          {resultsScreenShown && (
            <FeedbackBarContainer>
              <ResultsScreen />
            </FeedbackBarContainer>
          )}
          {centralMicrophoneState === "invisible" && (
            <WaveAnimationContainer>
              <Wave />
            </WaveAnimationContainer>
          )}
          {youDidItShown && (
            <CongratzContainer>
              <YouDidItScreen />
            </CongratzContainer>
          )}
          <MicContainer>
            <CentralMicrophone />
          </MicContainer>
        </TextBookContainer>
      </BookWrapper>
    </BookContainer>
  );
};

export default Book;
