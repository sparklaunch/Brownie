import { useRecoilState } from "recoil";
import currentPageAtom from "../../../../Stores/Classroom/Story/currentPage";

const RightNavigator = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const onClickRightNavigator = () => {
    if (currentPage < 10) {
      setCurrentPage(currentPage + 2);
    }
  };
  return (
    <div
      className={`bg-[#1AB9C5] inline-block px-3 py-4 rounded-lg shadow-lg cursor-pointer ml-3`}
      onClick={onClickRightNavigator}
    >
      <img
        src={"/assets/images/icons/right_angle.svg"}
        alt={"Right Angle Icon"}
      />
    </div>
  );
};

export default RightNavigator;
