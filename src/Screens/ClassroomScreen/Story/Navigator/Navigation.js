import navigatorOpenAtom from "../../../../Stores/Classroom/Story/navigatorOpen";
import { useRecoilState } from "recoil";
import LeftNavigator from "./LeftNavigator";
import Thumbnails from "./Thumbnails";
import RightNavigator from "./RightNavigator";

const Navigation = () => {
  const [navigatorOpen, setNavigatorOpen] = useRecoilState(navigatorOpenAtom);
  return (
    <div
      className={`fixed w-full left-0 ${
        navigatorOpen ? `top-0` : `top-[-216px]`
      } bg-[#0C4A4E] z-10 h-[216px] shadow-xl transition-all duration-500 ease-in-out flex flex-row items-center justify-center`}
    >
      <LeftNavigator />
      <Thumbnails />
      <RightNavigator />
    </div>
  );
};

export default Navigation;
