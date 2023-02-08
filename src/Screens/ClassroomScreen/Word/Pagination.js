import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";

const Pagination = () => {
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  return (
    <div className={`absolute top-[36px] right-[36px]`}>
      <p className={`text-[28px] text-[#515151] font-bold tracking-wide`}>
        {currentWordPage}
        <span className={`text-[20px] text-gray-400`}>/11</span>
      </p>
    </div>
  );
};

export default Pagination;
