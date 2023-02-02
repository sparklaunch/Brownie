import { useRecoilState } from "recoil";
import currentPageAtom from "../../Stores/Classroom/currentPage";

const RightPageTurner = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const onClickRightPageTurner = () => {
    setCurrentPage(Math.min(currentPage + 2, 19));
  };
  return (
    <div
      className={`absolute z-10 top-[50%] right-[10vw] translate-y-[-50%] cursor-pointer`}
      onClick={onClickRightPageTurner}
    >
      <img
        src={"/assets/images/icons/right_angle_icon.svg"}
        alt={"Right Angle Icon"}
      />
    </div>
  );
};

export default RightPageTurner;
