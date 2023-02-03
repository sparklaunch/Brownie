import ReactHowler from "react-howler";
import { useRecoilState } from "recoil";
import currentPageAtom from "../../Stores/Classroom/currentPage";

const AudioManager = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  if (currentPage === 3) {
    return <ReactHowler src={`/assets/audio/pages/1-1-4.mp3`} playing={true} />;
  }
  if (currentPage >= 4 && currentPage <= 12) {
    return (
      <ReactHowler
        src={`/assets/audio/pages/1-1-${currentPage}.mp3`}
        playing={true}
      />
    );
  } else {
    return null;
  }
};

export default AudioManager;
