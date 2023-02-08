import LeftPageTurner from "./WordLeftPageTurner";
import RightPageTurner from "./WordRightPageTurner";
import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../../Stores/Classroom/Word/currentWordPage";

const WordPageTurners = () => {
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  return (
    <div>
      <LeftPageTurner visible={currentWordPage !== 1} />
      <RightPageTurner visible={currentWordPage !== 11} />
    </div>
  );
};

export default WordPageTurners;
