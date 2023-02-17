import { useRecoilState } from "recoil";
import rightPagePlayingAtom from "../../../Stores/Classroom/Story/rightPagePlaying";
import { useParams } from "react-router-dom";
import currentPageAtom from "../../../Stores/Classroom/Story/currentPage";
import EmptyPage from "./EmptyPage";
import rightMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/rightMicrophoneState";
import ScoreHeader from "./ScoreHeader";
import scoresAtom from "../../../Stores/Classroom/Story/scores";
import centralMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import RightCompletedMicrophone from "./Microphone/Center/RightCompletedMicrophone";

const RightPage = ({ fileName, isEmpty, onClickRightPage }) => {
  const { level } = useParams();
  const [rightPagePlaying, setRightPagePlaying] =
    useRecoilState(rightPagePlayingAtom);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [rightMicrophoneState, setRightMicrophoneState] = useRecoilState(
    rightMicrophoneStateAtom
  );
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  const [scores, setScores] = useRecoilState(scoresAtom);
  return (
    <div
      className={`relative w-full h-full rounded-r-2xl z-[1] ${
        !rightPagePlaying &&
        currentPage !== 10 &&
        centralMicrophoneState !== "invisible" &&
        centralMicrophoneState !== "loading"
          ? `cursor-pointer`
          : `cursor-default`
      }`}
    >
      {centralMicrophoneState === "completed" && currentPage !== 10 ? (
        <RightCompletedMicrophone />
      ) : null}
      {isEmpty ? (
        <EmptyPage direction={`right`} />
      ) : (
        <div className={`w-[405.5px] h-[535px] overflow-clip rounded-r-2xl`}>
          <img
            src={fileName}
            alt={"Right Page"}
            loading={"lazy"}
            className={`rounded-r-2xl w-full h-full object-cover cursor-pointer ${
              currentPage >= 1 && `scale-[1.15]`
            }`}
            onClick={onClickRightPage}
          />
        </div>
      )}
      {scores[`${level}-${currentPage + 1}`] !== undefined && (
        <div
          className={`absolute left-[50%] translate-x-[-50%] top-3 scale-[0.7]`}
        >
          <ScoreHeader score={scores[`${level}-${currentPage + 1}`]} />
        </div>
      )}
      <div
        className={`absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#555555] opacity-50`}
      />
      {/*<div className={`absolute bottom-[-90px] right-[50%] translate-x-[50%]`}>*/}
      {/*  {rightMicrophoneState === "completed" && currentPage !== 10 ? (*/}
      {/*    <RightButtons />*/}
      {/*  ) : (*/}
      {/*    <RightMicrophone />*/}
      {/*  )}*/}
      {/*</div>*/}
    </div>
  );
};

export default RightPage;
