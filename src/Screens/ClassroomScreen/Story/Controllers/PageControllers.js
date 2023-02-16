import { useRecoilState } from "recoil";
import currentPageAtom from "../../../../Stores/Classroom/Story/currentPage";
import LeftPageAngle from "./LeftPageAngle";
import RightPageAngle from "./RightPageAngle";
import centralMicrophoneStateAtom from "../../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";

const PageControllers = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  const onClickFirstPage = () => {
    if (
      centralMicrophoneState !== "invisible" &&
      centralMicrophoneState !== "loading"
    ) {
      setCurrentPage(0);
    }
  };
  const onLeftPageButtonClick = () => {
    if (
      centralMicrophoneState !== "invisible" &&
      centralMicrophoneState !== "loading"
    ) {
      setCurrentPage(Math.max(currentPage - 2, 0));
    }
  };
  const onRightPageButtonClick = () => {
    if (
      centralMicrophoneState !== "invisible" &&
      centralMicrophoneState !== "loading"
    ) {
      setCurrentPage(Math.min(currentPage + 2, 10));
    }
  };
  return (
    <div className={`flex flex-row scale-[0.8] translate-x-[10%]`}>
      <p
        className={`font-[Jua] text-[20px] text-white px-5 py-2 bg-[#1AB9C5] rounded-3xl ${
          centralMicrophoneState !== "invisible" &&
          centralMicrophoneState !== "loading"
            ? `cursor-pointer`
            : ``
        } shadow-md mr-3`}
        onClick={onClickFirstPage}
      >
        처음으로
      </p>
      <div className={`flex flex-row`}>
        <div onClick={onLeftPageButtonClick}>
          <LeftPageAngle
            disabled={
              currentPage <= 0 ||
              centralMicrophoneState === "invisible" ||
              centralMicrophoneState === "loading"
            }
          />
        </div>
        <p
          className={`bg-white border-[1px] border-[#1AB9C5] rounded-3xl w-[120px] flex flex-row text-[28px] items-center justify-center`}
        >
          {Math.min(currentPage + 1, 10)}
          <span className={`text-[20px] ml-1 relative top-[2px]`}>/10</span>
        </p>
        <div onClick={onRightPageButtonClick}>
          <RightPageAngle
            disabled={
              currentPage >= 10 ||
              centralMicrophoneState === "invisible" ||
              centralMicrophoneState === "loading"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PageControllers;
