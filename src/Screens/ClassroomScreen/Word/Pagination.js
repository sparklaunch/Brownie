import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";
import useData from "../../../Hooks/useData";

const Pagination = () => {
  const words = useData("words");
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  return (
    <p
      className={`font-black text-[28px] tracking-widest w-[120px] text-center py-[14px] text-white`}
    >
      {currentWordPage}
      <span className={`font-normal text-[20px] text-white`}>
        /{words.length}
      </span>
    </p>
  );
};

export default Pagination;
