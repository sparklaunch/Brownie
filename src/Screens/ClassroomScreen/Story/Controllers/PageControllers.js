import { useRecoilState } from "recoil";
import currentPageAtom from "../../../../Stores/Classroom/Story/currentPage";
import LeftPageAngle from "./LeftPageAngle";
import RightPageAngle from "./RightPageAngle";

const PageControllers = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const onClickFirstPage = () => {
    setCurrentPage(0);
  };
  const onLeftPageButtonClick = () => {
    setCurrentPage(Math.max(currentPage - 2, 0));
  };
  const onRightPageButtonClick = () => {
    setCurrentPage(Math.min(currentPage + 2, 10));
  };
  return (
    <div className={`flex flex-row`}>
      <p
        className={`font-[Jua] text-[20px] text-white px-5 py-2 bg-[#1AB9C5] rounded-3xl cursor-pointer shadow-md mr-3`}
        onClick={onClickFirstPage}
      >
        처음으로
      </p>
      <div className={`flex flex-row`}>
        <div onClick={onLeftPageButtonClick}>
          <LeftPageAngle disabled={currentPage <= 0} />
        </div>
        <p
          className={`bg-white border-[1px] border-[#1AB9C5] rounded-3xl w-[120px] flex flex-row text-[28px] items-center justify-center`}
        >
          {Math.min(currentPage + 1, 10)}
          <span className={`text-[20px] ml-1 relative top-[2px]`}>/10</span>
        </p>
        <div onClick={onRightPageButtonClick}>
          <RightPageAngle disabled={currentPage >= 10} />
        </div>
      </div>
    </div>
  );
};

export default PageControllers;
