import navigatorOpenAtom from "../../../../Stores/Classroom/Story/navigatorOpen";
import { useRecoilState } from "recoil";

const Navigation = () => {
  const [navigatorOpen, setNavigatorOpen] = useRecoilState(navigatorOpenAtom);
  return (
    <div
      className={`absolute top-0 w-full ${
        navigatorOpen ? `h-[216px]` : `h-0`
      } bg-[#0C4A4E] shadow-xl transition-all duration-500 ease-in-out`}
    ></div>
  );
};

export default Navigation;
