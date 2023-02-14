import { useRecoilState } from "recoil";
import rightPagePlayingAtom from "../../../Stores/Classroom/Story/rightPagePlaying";
import { useParams } from "react-router-dom";
import currentPageAtom from "../../../Stores/Classroom/Story/currentPage";
import { Howl } from "howler";

const RightPage = ({ fileName, isEmpty }) => {
  const { level } = useParams();
  const [rightPagePlaying, setRightPagePlaying] =
    useRecoilState(rightPagePlayingAtom);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const onClickRightPage = () => {
    if (!rightPagePlaying) {
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
      className={`relative z-[1] ${rightPagePlaying || `cursor-pointer`}`}
      onClick={onClickRightPage}
    >
      {isEmpty || <img src={fileName} alt={"Right Page"} loading={"lazy"} />}
      <div
        className={`absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black opacity-50`}
      />
    </div>
  );
};

export default RightPage;
