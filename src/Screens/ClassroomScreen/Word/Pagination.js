import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";
import useData from "../../../Hooks/useData";

const Pagination = () => {
  const words = useData("words");
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  return (
    <div className={`rounded-tl-2xl rounded-br-2xl bg-[#FFA63D]`}>
      <p
        className={`font-black text-[28px] tracking-widest px-[36px] py-[14px] text-white`}
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
