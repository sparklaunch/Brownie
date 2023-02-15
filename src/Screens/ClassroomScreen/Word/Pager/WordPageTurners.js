import LeftPageTurner from "./WordLeftPageTurner";
import RightPageTurner from "./WordRightPageTurner";
import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../../Stores/Classroom/Word/currentWordPage";
import useData from "../../../../Hooks/useData";

const WordPageTurners = () => {
  const words = useData("words");
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  return (
    <div>
      <LeftPageTurner visible={currentWordPage !== 1} />
      <RightPageTurner visible={currentWordPage !== words.length} />
    </div>
  );
};
