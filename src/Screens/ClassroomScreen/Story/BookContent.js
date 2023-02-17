import LeftPage from "./LeftPage";
import RightPage from "./RightPage";
import { useParams } from "react-router-dom";
import currentPageAtom from "../../../Stores/Classroom/Story/currentPage";
import { useRecoilState } from "recoil";
import resultsScreenShownAtom from "../../../Stores/Classroom/Story/resultsScreenShown";
import ResultsScreen from "./Results/ResultsScreen";
import highlightedPageAtom from "../../../Stores/Classroom/Story/highlightedPage";
import styled from "styled-components";
import highlightVisibleAtom from "../../../Stores/Classroom/Story/highlightVisible";
import centralMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import { Howl } from "howler";
import leftPagePlayingAtom from "../../../Stores/Classroom/Story/leftPagePlaying";
import rightPagePlayingAtom from "../../../Stores/Classroom/Story/rightPagePlaying";
import useData from "../../../Hooks/useData";

const BookContent = () => {
  const GlowingContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    border-radius: 16px;
    box-shadow: 0 0 5px 5px #ffd53d, 0 0 10px 5px #ffd53d, 0 0 15px 5px #ffd53d,
      inset 0 0 5px 5px #ffd53d, inset 0 0 10px 5px #ffd53d,
      inset 0 0 15px 5px #ffd53d;
  `;
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
    <div className={`relative`}>
      <div className={`grid grid-cols-2 gap-0 shadow-2xl rounded-2xl`}>
        <div className={`relative`}>
          {highlightedPage === currentPage &&
          highlightVisible &&
          centralMicrophoneState !== "completed" ? (
            <GlowingContainer onClick={onClickLeftPage} />
          ) : null}
          <LeftPage
            fileName={leftPageFile}
            isEmpty={currentPage === 0}
            onClickLeftPage={onClickLeftPage}
          />
        </div>
        <div className={`relative`}>
          {highlightedPage === currentPage + 1 &&
          highlightVisible &&
          centralMicrophoneState !== "completed" ? (
            <GlowingContainer onClick={onClickRightPage} />
          ) : null}
          <RightPage
            fileName={rightPageFile}
            isEmpty={currentPage === 10}
            onClickRightPage={onClickRightPage}
          />
        </div>
      </div>
      {resultsScreenShown && <ResultsScreen />}
    </div>
  );
};

export default BookContent;
