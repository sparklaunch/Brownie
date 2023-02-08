import LeftPageTurner from "./WordLeftPageTurner";
import RightPageTurner from "./WordRightPageTurner";
import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../../Stores/Classroom/Word/currentWordPage";
import data from "../../../../data.json";
import { useParams } from "react-router-dom";

const WordPageTurners = () => {
  const { level } = useParams();
  const dataString = JSON.stringify(data);
  const dataObject = JSON.parse(dataString);
  const words = dataObject.find((item) => item.level === level).words;
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  return (
    <div>
      <LeftPageTurner visible={currentWordPage !== 1} />
      <RightPageTurner visible={currentWordPage !== words.length} />
    </div>
  );
};

export default WordPageTurners;
