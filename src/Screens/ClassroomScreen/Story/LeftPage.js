import { useRecoilState } from "recoil";
import currentPageAtom from "../../../Stores/Classroom/Story/currentPage";
import { useParams } from "react-router-dom";
import leftPagePlayingAtom from "../../../Stores/Classroom/Story/leftPagePlaying";
import EmptyPage from "./EmptyPage";
import leftMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/leftMicrophoneState";
import scoresAtom from "../../../Stores/Classroom/Story/scores";
import ScoreHeader from "./ScoreHeader";
import centralMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import LeftCompletedMicrophone from "./Microphone/Center/LeftCompletedMicrophone";
import useData from "../../../Hooks/useData";
import { LeftPageContainer, LeftPageImageContainer } from "./LeftPageStyles";

const LeftPage = ({ fileName, isEmpty, onClickLeftPage }) => {
  const [leftPagePlaying, setLeftPagePlaying] =
    useRecoilState(leftPagePlayingAtom);
  const [leftMicrophoneState, setLeftMicrophoneState] = useRecoilState(
    leftMicrophoneStateAtom
  );
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  const { level } = useParams();
  const bookID = useData("id");
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [scores, setScores] = useRecoilState(scoresAtom);
  return (
    <LeftPageContainer>
      {centralMicrophoneState === "completed" && currentPage !== 0 ? (
        <LeftCompletedMicrophone />
      ) : null}
      {isEmpty ? (
        <EmptyPage direction={`left`} />
      ) : (
        <LeftPageImageContainer>
          <img
            src={fileName}
            alt={"Left Page"}
            loading={"lazy"}
            className={`h-full`}
            onClick={onClickLeftPage}
          />
        </LeftPageImageContainer>
      )}
      {scores[`${level}-${currentPage}`] !== undefined && (
        <div
          className={`absolute left-[50%] translate-x-[-50%] top-3 scale-[0.7]`}
        >
          <ScoreHeader score={scores[`${level}-${currentPage}`]} />
        </div>
      )}
      <div
        className={`absolute right-0 top-0 h-full w-10 bg-gradient-to-r from-transparent to-[#555555] opacity-50`}
      />
      {/*<div className={`absolute bottom-[-90px] left-[50%] translate-x-[-50%]`}>*/}
      {/*  {leftMicrophoneState === "completed" && currentPage !== 0 ? (*/}
      {/*    <LeftButtons />*/}
      {/*  ) : (*/}
      {/*    <LeftMicrophone />*/}
      {/*  )}*/}
      {/*</div>*/}
    </LeftPageContainer>
  );
};

export default LeftPage;
