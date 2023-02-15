import { useRecoilState } from "recoil";
import rightPagePlayingAtom from "../../../Stores/Classroom/Story/rightPagePlaying";
import { useParams } from "react-router-dom";
import currentPageAtom from "../../../Stores/Classroom/Story/currentPage";
import { Howl } from "howler";
import EmptyPage from "./EmptyPage";
import rightMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/rightMicrophoneState";
import ScoreHeader from "./ScoreHeader";
import scoresAtom from "../../../Stores/Classroom/Story/scores";
import centralMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";

const RightPage = ({ fileName, isEmpty }) => {
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
  const onClickRightPage = () => {
    if (
      !rightPagePlaying &&
      currentPage !== 10 &&
      centralMicrophoneState !== "invisible" &&
      centralMicrophoneState !== "loading"
    ) {
      console.log(`/assets/audio/pages/${level}-${currentPage + 1}.mp3`);
      const audio = new Howl({
        src: [`/assets/audio/pages/${level}-${currentPage + 1}.mp3`],
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
    <div
      className={`relative z-[1] ${
        !rightPagePlaying &&
        currentPage !== 10 &&
        centralMicrophoneState !== "invisible" &&
        centralMicrophoneState !== "loading"
          ? `cursor-pointer`
          : `cursor-default`
      }`}
    >
      {scores[`${level}-${currentPage + 1}`] !== undefined && (
        <div className={`absolute left-[50%] translate-x-[-50%] top-3`}>
          <ScoreHeader score={scores[`${level}-${currentPage + 1}`]} />
        </div>
      )}
      {isEmpty ? (
        <EmptyPage direction={`right`} />
      ) : (
        <img
          src={fileName}
          alt={"Right Page"}
          loading={"lazy"}
          className={`rounded-r-2xl w-full h-full object-cover`}
          onClick={onClickRightPage}
        />
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
