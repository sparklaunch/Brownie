import { useRecoilState } from "recoil";
import currentPageAtom from "../../../../Stores/Classroom/Story/currentPage";

const LeftNavigator = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const onClickLeftNavigator = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 2);
    }
  };
  return (
    <div
      className={`bg-[#1AB9C5] inline-block px-3 py-4 rounded-lg shadow-lg cursor-pointer mr-3`}
      onClick={onClickLeftNavigator}
    >
      <img
        src={"/assets/images/icons/left_angle.svg"}
        alt={"Left Angle Icon"}
      />
    </div>
  );
};

export default LeftNavigator;
