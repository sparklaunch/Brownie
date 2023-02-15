import { useRecoilState } from "recoil";
import currentPageAtom from "../../../Stores/Classroom/Story/currentPage";
import { useParams } from "react-router-dom";
import { Howl } from "howler";
import leftPagePlayingAtom from "../../../Stores/Classroom/Story/leftPagePlaying";
import EmptyPage from "./EmptyPage";
import leftMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/leftMicrophoneState";
import scoresAtom from "../../../Stores/Classroom/Story/scores";
import ScoreHeader from "./ScoreHeader";
import centralMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import LeftCompletedMicrophone from "./Microphone/Center/LeftCompletedMicrophone";

const LeftPage = ({ fileName, isEmpty }) => {
  const [leftPagePlaying, setLeftPagePlaying] =
    useRecoilState(leftPagePlayingAtom);
  const [leftMicrophoneState, setLeftMicrophoneState] = useRecoilState(
    leftMicrophoneStateAtom
  );
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  const { level } = useParams();
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [scores, setScores] = useRecoilState(scoresAtom);
  const onClickLeftPage = () => {
    if (
      !leftPagePlaying &&
      currentPage !== 0 &&
      centralMicrophoneState !== "invisible" &&
      centralMicrophoneState !== "loading"
    ) {
      console.log(`/assets/audio/pages/${level}-${currentPage}.mp3`);
      const audio = new Howl({
        src: [`/assets/audio/pages/${level}-${currentPage}.mp3`],
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
  return (
    <div
      className={`relative w-full h-full z-[1] ${
        !leftPagePlaying &&
        currentPage !== 0 &&
        centralMicrophoneState !== "invisible" &&
        centralMicrophoneState !== "loading"
          ? `cursor-pointer`
          : `cursor-default`
      }`}
    >
      {scores[`${level}-${currentPage}`] !== undefined && (
        <div className={`absolute left-[50%] translate-x-[-50%] top-3`}>
          <ScoreHeader score={scores[`${level}-${currentPage}`]} />
        </div>
      )}
      {centralMicrophoneState === "completed" && currentPage !== 0 ? (
        <LeftCompletedMicrophone />
      ) : null}
      {isEmpty ? (
        <EmptyPage direction={`left`} />
      ) : (
        <img
          src={fileName}
          alt={"Left Page"}
          loading={"lazy"}
          className={`rounded-l-2xl w-full h-full object-cover`}
          onClick={onClickLeftPage}
        />
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
    </div>
  );
};

export default LeftPage;
