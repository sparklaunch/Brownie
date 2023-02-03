import { useRecoilState } from "recoil";
import currentPageAtom from "../../Stores/Classroom/currentPage";

const PageControllers = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const onClickFirstPage = () => {
    setCurrentPage(1);
  };
  return (
    <div className={`absolute top-[4vw] right-[15vw]`}>
      <div className={`flex flex-row`}>
        <div>
          <p
            className={`font-[Jua] text-[20px] text-white px-5 py-2 bg-[#1AB9C5] rounded-3xl cursor-pointer shadow-md`}
            onClick={onClickFirstPage}
          >
            처음으로
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default PageControllers;
