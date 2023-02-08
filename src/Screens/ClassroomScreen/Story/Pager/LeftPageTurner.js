import { useRecoilState } from "recoil";
import currentPageAtom from "../../../../Stores/Classroom/Story/currentPage";

const LeftPageTurner = ({ visible }) => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const onClickLeftPageTurner = () => {
    setCurrentPage(Math.max(currentPage - 2, 0));
  };
  if (visible) {
    return (
      <div
        className={`absolute z-10 top-[50%] left-[10vw] translate-y-[-50%] cursor-pointer`}
        onClick={onClickLeftPageTurner}
      >
        <img
          src={"/assets/images/icons/active_angle.svg"}
          alt={"Left Angle Icon"}
          className={`transform rotate-180`}
        />
      </div>
    );
  } else {
    return (
      <div className={`absolute z-10 top-[50%] left-[10vw] translate-y-[-50%]`}>
        <img
          src={"/assets/images/icons/inactive_angle.svg"}
          alt={"Left Angle Icon"}
        />
      </div>
    );
  }
};

export default LeftPageTurner;
