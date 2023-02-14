import navigatorOpenAtom from "../../../../Stores/Classroom/Story/navigatorOpen";
import { useRecoilState } from "recoil";

const NavigatorButton = () => {
  const [navigatorOpen, setNavigatorOpen] = useRecoilState(navigatorOpenAtom);
  const onClickNavigatorButton = () => {
    setNavigatorOpen(!navigatorOpen);
  };
  return (
    <div
      className={`absolute top-0 z-[2] left-[50%] translate-x-[-50%] ${
        navigatorOpen && `top-[216px]`
      } transition-all duration-500 ease-in-out`}
    >
      <div
        className={`flex flex-row items-center bg-[#1AB9C5] px-10 py-2 rounded-b-lg shadow-lg cursor-pointer`}
        onClick={onClickNavigatorButton}
      >
        <p className={`text-white text-[18px] mr-3`}>Pages</p>
        <img
          src={"/assets/images/icons/caret_down.svg"}
          alt={"Caret Down Icon"}
          className={`transform transition-all duration-500 ease-in-out ${
            navigatorOpen && `rotate-180`
          }`}
        />
      </div>
    </div>
  );
};

export default NavigatorButton;
