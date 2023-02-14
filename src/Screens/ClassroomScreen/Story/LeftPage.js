import { useRecoilState } from "recoil";
import currentPageAtom from "../../../Stores/Classroom/Story/currentPage";
import { useParams } from "react-router-dom";
import { Howl } from "howler";
import leftPagePlayingAtom from "../../../Stores/Classroom/Story/leftPagePlaying";
import LeftMicrophone from "./Microphone/Left/LeftMicrophone";
import EmptyPage from "./EmptyPage";
import leftMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/leftMicrophoneState";
import LeftButtons from "./Microphone/Left/LeftButtons";

const LeftPage = ({ fileName, isEmpty }) => {
  const [leftPagePlaying, setLeftPagePlaying] =
    useRecoilState(leftPagePlayingAtom);
  const [leftMicrophoneState, setLeftMicrophoneState] = useRecoilState(
    leftMicrophoneStateAtom
  );
  const { level } = useParams();
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const onClickLeftPage = () => {
    if (!leftPagePlaying && currentPage !== 0) {
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
      className={`relative z-[1] ${
        !leftPagePlaying && currentPage !== 0
          ? `cursor-pointer`
          : `cursor-default`
      }`}
    >
      {isEmpty ? (
        <EmptyPage direction={`left`} />
      ) : (
        <img
          src={fileName}
          alt={"Left Page"}
          loading={"lazy"}
          className={`rounded-l-2xl`}
          onClick={onClickLeftPage}
        />
      )}
      <div
        className={`absolute right-0 top-0 h-full w-10 bg-gradient-to-r from-transparent to-black opacity-50`}
      />
      <div className={`absolute bottom-[-90px] left-[50%] translate-x-[-50%]`}>
        {leftMicrophoneState === "completed" && currentPage !== 0 ? (
          <LeftButtons />
        ) : (
          <LeftMicrophone />
        )}
      </div>
    </div>
  );
};

export default LeftPage;
