import { useRecoilState } from "recoil";
import rightPagePlayingAtom from "../../../Stores/Classroom/Story/rightPagePlaying";
import { useParams } from "react-router-dom";
import currentPageAtom from "../../../Stores/Classroom/Story/currentPage";
import { Howl } from "howler";
import RightMicrophone from "./Microphone/Right/RightMicrophone";
import EmptyPage from "./EmptyPage";
import rightMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/rightMicrophoneState";
import RightButtons from "./Microphone/Right/RightButtons";

const RightPage = ({ fileName, isEmpty }) => {
  const { level } = useParams();
  const [rightPagePlaying, setRightPagePlaying] =
    useRecoilState(rightPagePlayingAtom);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [rightMicrophoneState, setRightMicrophoneState] = useRecoilState(
    rightMicrophoneStateAtom
  );
  const onClickRightPage = () => {
    if (!rightPagePlaying && currentPage !== 10) {
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
        !rightPagePlaying && currentPage !== 10
          ? `cursor-pointer`
          : `cursor-default`
      }`}
    >
      {isEmpty ? (
        <EmptyPage direction={`right`} />
      ) : (
        <img
          src={fileName}
          alt={"Right Page"}
          loading={"lazy"}
          className={`rounded-r-2xl`}
          onClick={onClickRightPage}
        />
      )}
      <div
        className={`absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black opacity-50`}
      />
      <div className={`absolute bottom-[-90px] right-[50%] translate-x-[50%]`}>
        {rightMicrophoneState === "completed" && currentPage !== 10 ? (
          <RightButtons />
        ) : (
          <RightMicrophone />
        )}
      </div>
    </div>
  );
};

export default RightPage;
