import navigatorOpenAtom from "../../../../Stores/Classroom/Story/navigatorOpen";
import { useRecoilState } from "recoil";
import LeftNavigator from "./LeftNavigator";
import Thumbnails from "./Thumbnails";
import RightNavigator from "./RightNavigator";

const Navigation = () => {
  const [navigatorOpen, setNavigatorOpen] = useRecoilState(navigatorOpenAtom);
  return (
    <div
      className={`absolute top-0 w-full ${
        navigatorOpen ? `h-[216px]` : `h-0`
      } bg-[#0C4A4E] shadow-xl transition-all duration-500 ease-in-out`}
    >
      <div className={`flex flex-row items-center justify-center`}>
        <LeftNavigator />
        <Thumbnails />
        <RightNavigator />
      </div>
    </div>
  );
};

export default Navigation;
