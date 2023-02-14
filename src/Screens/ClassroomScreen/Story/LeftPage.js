import { useRecoilState } from "recoil";
import currentPageAtom from "../../../Stores/Classroom/Story/currentPage";
import { useParams } from "react-router-dom";
import { Howl } from "howler";
import leftPagePlayingAtom from "../../../Stores/Classroom/Story/leftPagePlaying";

const LeftPage = ({ fileName, isEmpty }) => {
  const [leftPagePlaying, setLeftPagePlaying] =
    useRecoilState(leftPagePlayingAtom);
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
      onClick={onClickLeftPage}
    >
      {isEmpty || <img src={fileName} alt={"Left Page"} loading={"lazy"} />}
      <div
        className={`absolute right-0 top-0 h-full w-10 bg-gradient-to-r from-transparent to-black opacity-50`}
      />
    </div>
  );
};

export default LeftPage;
