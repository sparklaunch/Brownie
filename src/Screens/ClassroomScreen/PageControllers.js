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
        <p
          className={`font-[Jua] text-[20px] text-white px-5 py-2 bg-[#1AB9C5] rounded-3xl cursor-pointer shadow-md`}
          onClick={onClickFirstPage}
        >
          처음으로
        </p>
        <div className={`flex flex-row`}>
          <img
            src={"/assets/images/icons/left_page_button.svg"}
            alt={`Left Page Button`}
          />
          <p
            className={`bg-white border-[1px] border-[#1AB9C5] rounded-3xl w-[120px] flex flex-row text-[28px] items-center justify-center`}
          >
            {currentPage}
            <span className={`text-[20px] ml-1 relative top-[2px]`}>/19</span>
          </p>
          <img
            src={"/assets/images/icons/right_page_button.svg"}
            alt={`Right Page Button`}
          />
        </div>
      </div>
    </div>
  );
};

export default PageControllers;
