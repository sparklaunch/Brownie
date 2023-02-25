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
  LoadingCardWrapper,
  MicContainer,
  ModeSwitcherContainer,
  NavigatorContainer,
  PagerControllersContainer,
  RightClickable,
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
import CentralMicrophone from "./Microphone/CentralMicrophone";
import BookTitle from "./BookTitle";
import Wave from "./Microphone/Wave";
import ResultsScreen from "./Results/ResultsScreen";
import YouDidItScreen from "./Results/YouDidIt/YouDidItScreen";
import scoresAtom from "../../../Stores/Classroom/Story/scores";
import LeftCompletedMicrophone from "./Microphone/LeftCompletedMicrophone";
import RightCompletedMicrophone from "./Microphone/RightCompletedMicrophone";
import highlightedPageAtom from "../../../Stores/Classroom/Story/highlightedPage";
import highlightVisibleAtom from "../../../Stores/Classroom/Story/highlightVisible";
import { Howl, Howler } from "howler";
import LoadingCard from "../LoadingCard";
import ScorePill from "./Results/Score/ScorePill";
import _ from "lodash";

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
  const playLeftPageAudio = () => {
    Howler.unload();
    new Howl({
      src: [`/assets/audio/pages/${bookID}_${currentPage}.mp3`]
    }).play();
  };
  const playRightPageAudio = () => {
    Howler.unload();
    new Howl({
      src: [`/assets/audio/pages/${bookID}_${currentPage + 1}.mp3`]
    }).play();
  };
  const onClickLeftPage = () => {
    return _.throttle(playLeftPageAudio, 1000, {
      leading: true,
      trailing: true
    });
  };
  const onClickRightPage = () => {
    return _.throttle(playRightPageAudio, 1000, {
      leading: true,
      trailing: true
    });
  };
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
                <ScorePill score={scores[`${level}-${currentPage}`]} />
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
            {currentPage !== 0 && <LeftClickable onClick={onClickLeftPage()} />}
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
                <ScorePill score={scores[`${level}-${currentPage + 1}`]} />
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
            {currentPage !== 10 && (
              <RightClickable onClick={onClickRightPage()} />
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
          {centralMicrophoneState === "loading" && (
            <LoadingCardWrapper>
              <LoadingCard />
            </LoadingCardWrapper>
          )}
        </TextBookContainer>
      </BookWrapper>
    </BookContainer>
  );
};

export default Book;
