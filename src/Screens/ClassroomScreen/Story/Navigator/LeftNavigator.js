import { useRecoilState } from "recoil";
import navigatorPageAtom from "../../../../Stores/Classroom/Story/navigatorPage";

const LeftNavigator = () => {
  const [navigatorPage, setNavigatorPage] = useRecoilState(navigatorPageAtom);
  const onClickLeftNavigator = () => {
    if (navigatorPage !== 0) {
      setNavigatorPage(navigatorPage - 2);
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
