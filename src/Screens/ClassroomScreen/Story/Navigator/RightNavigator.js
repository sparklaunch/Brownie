import { useRecoilState } from "recoil";
import navigatorPageAtom from "../../../../Stores/Classroom/Story/navigatorPage";

const RightNavigator = () => {
  const [navigatorPage, setNavigatorPage] = useRecoilState(navigatorPageAtom);
  const onClickRightNavigator = () => {
    if (navigatorPage < 10) {
      setNavigatorPage(navigatorPage + 2);
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
