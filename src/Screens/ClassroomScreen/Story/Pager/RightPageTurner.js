import { useRecoilState } from "recoil";
import currentPageAtom from "../../../../Stores/Classroom/Story/currentPage";

const RightPageTurner = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const onClickRightPageTurner = () => {
    setCurrentPage(Math.min(currentPage + 2, 10));
  };
  if (currentPage !== 10) {
    return (
      <div className={`cursor-pointer`} onClick={onClickRightPageTurner}>
        <img
          src={"/assets/images/icons/active_angle.svg"}
          alt={"Right Angle Icon"}
        />
      </div>
    );
  } else {
    return (
      <div>
        <img
          src={"/assets/images/icons/inactive_angle.svg"}
          alt={"Right Angle Icon"}
          className={`transform rotate-180`}
        />
      </div>
    );
  }
};

export default RightPageTurner;
