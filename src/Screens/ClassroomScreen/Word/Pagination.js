import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";
import { useParams } from "react-router-dom";
import data from "../../../data.json";

const Pagination = () => {
  const { level } = useParams();
  const dataString = JSON.stringify(data);
  const dataObject = JSON.parse(dataString);
  const words = dataObject.find((book) => book.level === level).words;
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  return (
    <p className={`text-[28px] text-[#515151] font-bold tracking-wide`}>
      {currentWordPage}
      <span className={`text-[20px] text-gray-400`}>/{words.length}</span>
    </p>
  );
};

export default Pagination;
