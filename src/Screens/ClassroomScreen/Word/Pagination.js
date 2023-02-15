import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";
import useData from "../../../Hooks/useData";

const Pagination = () => {
  const words = useData("words");
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
