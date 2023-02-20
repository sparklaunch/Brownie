import { useParams } from "react-router-dom";
import currentPageAtom from "../../../Stores/Classroom/Story/currentPage";
import { useRecoilState } from "recoil";
import resultsScreenShownAtom from "../../../Stores/Classroom/Story/resultsScreenShown";
import highlightedPageAtom from "../../../Stores/Classroom/Story/highlightedPage";
import highlightVisibleAtom from "../../../Stores/Classroom/Story/highlightVisible";
import centralMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import { Howl } from "howler";
import leftPagePlayingAtom from "../../../Stores/Classroom/Story/leftPagePlaying";
import rightPagePlayingAtom from "../../../Stores/Classroom/Story/rightPagePlaying";
import useData from "../../../Hooks/useData";
import { GlowingContainer, PagesContainer } from "./BookContentStyles";
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";
import ResultsScreen from "./Results/ResultsScreen";

const BookContent = () => {
  const { level } = useParams();
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [resultsScreenShown, setResultsScreenShown] = useRecoilState(
    resultsScreenShownAtom
  );
  const [highlightVisible, setHighlightVisible] =
    useRecoilState(highlightVisibleAtom);
  const [highlightedPage, setHighlightedPage] =
    useRecoilState(highlightedPageAtom);
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  const [leftPagePlaying, setLeftPagePlaying] =
    useRecoilState(leftPagePlayingAtom);
  const [rightPagePlaying, setRightPagePlaying] =
    useRecoilState(rightPagePlayingAtom);
  const bookID = useData("id");
  const leftPageFile = `/assets/images/pages/${bookID}_${currentPage}.jpg`;
  const rightPageFile = `/assets/images/pages/${bookID}_${currentPage + 1}.jpg`;
  const onClickLeftPage = () => {
    if (
      !leftPagePlaying &&
      currentPage !== 0 &&
      centralMicrophoneState !== "invisible" &&
      centralMicrophoneState !== "loading"
    ) {
      const audio = new Howl({
        src: [`/assets/audio/pages/${bookID}_${currentPage}.mp3`],
        onend: function () {
          setLeftPagePlaying(false);
        },
        onplay: function () {
          setLeftPagePlaying(true);
        }
      });
      audio.play();
    }
  };
  const onClickRightPage = () => {
    if (
      !rightPagePlaying &&
      currentPage !== 10 &&
      centralMicrophoneState !== "invisible" &&
      centralMicrophoneState !== "loading"
    ) {
      const audio = new Howl({
        src: [`/assets/audio/pages/${bookID}_${currentPage + 1}.mp3`],
        onend: function () {
          setRightPagePlaying(false);
        },
        onplay: function () {
          setRightPagePlaying(true);
        }
      });
      audio.play();
    }
  };
  return (
    <PagesContainer>
      {highlightedPage === currentPage &&
      highlightVisible &&
      centralMicrophoneState !== "completed" ? (
        <GlowingContainer onClick={onClickLeftPage} direction={`left`} />
      ) : null}
      <LeftPage
        fileName={leftPageFile}
        isEmpty={currentPage === 0}
        onClickLeftPage={onClickLeftPage}
      />
      {highlightedPage === currentPage + 1 &&
      highlightVisible &&
      centralMicrophoneState !== "completed" ? (
        <GlowingContainer onClick={onClickRightPage} direction={`right`} />
      ) : null}
      <RightPage
        fileName={rightPageFile}
        isEmpty={currentPage === 10}
        onClickRightPage={onClickRightPage}
      />
      {resultsScreenShown && <ResultsScreen />}
    </PagesContainer>
  );
};

export default BookContent;
