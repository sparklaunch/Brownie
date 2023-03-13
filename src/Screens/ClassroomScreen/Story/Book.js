import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import centralMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import youDidItShownAtom from "../../../Stores/Classroom/youDidItShown";
import {
  BookContainer,
  BookWrapper,
  CongratzContainer,
  FeedbackBarContainer,
  GlowBorder,
  GlowBorderContainer,
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
import textbookSizeAtom from "../../../Stores/Misc/textbookSize";
import temporaryGlowBorderShownAtom from "../../../Stores/Classroom/Story/temporaryGlowBorderShown";
import temporaryGlowBorderDirectionAtom from "../../../Stores/Classroom/Story/temporaryGlowBorderDirection";
import mediaRecorderAtom from "../../../Stores/Misc/mediaRecorder";
import currentActivePageAtom from "../../../Stores/Classroom/Story/currentActivePage";
import audioDurationAtom from "../../../Stores/Classroom/audioDuration";

const Book = () => {
  const textbookSize = useRecoilValue(textbookSizeAtom);
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  const mediaRecorder = useRecoilValue(mediaRecorderAtom);
  const resultsScreenShown = useRecoilValue(resultsScreenShownAtom);
  const youDidItShown = useRecoilValue(youDidItShownAtom);
  const currentPage = useRecoilValue(currentPageAtom);
  const scores = useRecoilValue(scoresAtom);
  const [highlightedPage, setHighlightedPage] =
    useRecoilState(highlightedPageAtom);
  const [highlightVisible, setHighlightVisible] =
    useRecoilState(highlightVisibleAtom);
  const temporaryGlowBorderShown = useRecoilValue(temporaryGlowBorderShownAtom);
  const temporaryGlowBorderDirection = useRecoilValue(
    temporaryGlowBorderDirectionAtom
  );
  const setAudioDuration = useSetRecoilState(audioDurationAtom);
  const [currentActivePage, setCurrentActivePage] = useRecoilState(
    currentActivePageAtom
  );
  const { level } = useParams();
  const bookID = useData("id");
  const onClickWave = async () => {
    // 뭬이브 애니메이션 클릭 시,
    try {
      setCentralMicrophoneState(`loading`);
      mediaRecorder.stop();
    } catch (error) {
      console.log(error);
    }
  };
  const onClickLeftPage = () => {
    Howler.unload();
    setHighlightedPage(currentPage);
    setHighlightVisible(true);
    setCurrentActivePage("left");
    const leftPageAudio = new Howl({
      src: [`/assets/audio/pages/${bookID}_${currentPage}.mp3`],
      onload: () => {
        const duration = leftPageAudio.duration() * 1000 + 2000;
        setAudioDuration(duration);
      },
      onplay: () => {
        setCentralMicrophoneState("disabled");
      },
      onend: () => {
        setCentralMicrophoneState("idle");
      }
    });
    leftPageAudio.play();
  };
  const onClickRightPage = () => {
    Howler.unload();
    setHighlightedPage(currentPage + 1);
    setHighlightVisible(true);
    setCurrentActivePage("right");
    const rightPageAudio = new Howl({
      src: [`/assets/audio/pages/${bookID}_${currentPage + 1}.mp3`],
      onload: () => {
        const duration = rightPageAudio.duration() * 1000 + 2000;
        setAudioDuration(duration);
      },
      onplay: () => {
        setCentralMicrophoneState("disabled");
      },
      onend: () => {
        setCentralMicrophoneState("idle");
      }
    });
    rightPageAudio.play();
  };
  return (
    <BookContainer>
      <NavigatorContainer>
        <Navigator />
      </NavigatorContainer>
      <BookWrapper>
        <TextBookContainer textbookSize={textbookSize}>
          <TextBookLeftPage>
            {currentPage === 0 ? (
              <LeftPageImage src={`/assets/images/pages/blank.jpg`} />
            ) : (
              <LeftPageImage
                src={`/assets/images/pages/${bookID}_${currentPage}.jpg`}
              />
            )}
            <LeftPageShade />
            {scores[`${level}-${currentPage}`] !== undefined && ( // 점수가 있으면
              <ScoreBarContainer>
                <ScorePill score={scores[`${level}-${currentPage}`]} />
              </ScoreBarContainer>
            )}
            {centralMicrophoneState === "completed" &&
              currentPage !== 0 && ( // 마이크가 완료되었으면
                <LeftCompletedButtonsContainer>
                  <LeftCompletedMicrophone />
                </LeftCompletedButtonsContainer>
              )}
            <GlowBorderContainer textbookSize={textbookSize}>
              {highlightedPage === currentPage &&
                highlightVisible && ( // 하이라이트가 있으면
                  <GlowBorder direction={`left`} />
                )}
              {temporaryGlowBorderShown &&
                temporaryGlowBorderDirection === `left` && (
                  <GlowBorder direction={`left`} />
                )}
            </GlowBorderContainer>
            {currentPage !== 0 && (
              <LeftClickable
                onClick={onClickLeftPage}
                dimmed={
                  currentActivePage === `right` &&
                  scores[`${level}-${currentPage}`] === undefined
                } // 오른쪽 페이지가 활성화되어있고, 점수가 없으면 딤드 처리
              />
            )}
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
            {scores[`${level}-${currentPage + 1}`] !== undefined && ( // 점수가 있으면
              <ScoreBarContainer>
                <ScorePill score={scores[`${level}-${currentPage + 1}`]} />
              </ScoreBarContainer>
            )}
            {centralMicrophoneState === "completed" &&
              currentPage !== 10 && ( // 마이크가 완료되었으면
                <RightCompletedButtonsContainer>
                  <RightCompletedMicrophone />
                </RightCompletedButtonsContainer>
              )}
            {highlightedPage === currentPage + 1 &&
              highlightVisible && ( // 하이라이트가 있으면
                <GlowBorder direction={`right`} />
              )}
            {temporaryGlowBorderShown &&
              temporaryGlowBorderDirection === `right` && (
                <GlowBorder direction={`right`} />
              )}
            {currentPage !== 10 && (
              <RightClickable
                onClick={onClickRightPage}
                dimmed={
                  currentActivePage === `left` &&
                  scores[`${level}-${currentPage + 1}`] === undefined
                } // 왼쪽 페이지가 활성화되어있고, 오른쪽 페이지의 점수가 없으면 딤드 처리
              />
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
            <WaveAnimationContainer onClick={onClickWave}>
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
