import { useRecoilState } from "recoil";
import currentPageAtom from "../../../../Stores/Classroom/Story/currentPage";

const LeftPageTurner = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const onClickLeftPageTurner = () => {
    setCurrentPage(Math.max(currentPage - 2, 0));
  };
  if (currentPage !== 0) {
    return (
      <div className={`cursor-pointer`} onClick={onClickLeftPageTurner}>
        <img
          src={"/assets/images/icons/active_angle.svg"}
          alt={"Left Angle Icon"}
          className={`transform rotate-180`}
        />
      </div>
    );
  } else {
    return (
      <div>
        <img
          src={"/assets/images/icons/inactive_angle.svg"}
          alt={"Left Angle Icon"}
        />
      </div>
    );
  }
};

export default LeftPageTurner;
