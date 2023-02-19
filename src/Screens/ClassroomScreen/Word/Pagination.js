import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";
import useData from "../../../Hooks/useData";

const Pagination = () => {
  const words = useData("words");
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  return (
    <div className={`desktop:rounded-tl-2xl rounded-br-2xl bg-[#FFA63D]`}>
      <p
        className={`font-black text-[28px] tracking-widest w-[120px] text-center py-[14px] text-white`}
      >
        {currentWordPage}
        <span className={`font-normal text-[20px] text-white`}>
          /{words.length}
        </span>
      </p>
    </div>
  );
};

export default Pagination;
