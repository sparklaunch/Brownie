import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../../Stores/Classroom/Word/currentWordPage";

const WordRightPageTurner = ({ visible }) => {
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const onClickRightPageTurner = () => {
    setCurrentWordPage(Math.min(currentWordPage + 1, 11));
  };
  if (visible) {
    return (
      <div
        className={`absolute z-10 top-[50%] right-[10vw] translate-y-[-50%] cursor-pointer`}
        onClick={onClickRightPageTurner}
      >
        <img
          src={"/assets/images/icons/active_angle.svg"}
          alt={"Right Angle Icon"}
        />
      </div>
    );
  } else {
    return (
      <div
        className={`absolute z-10 top-[50%] right-[10vw] translate-y-[-50%]`}
      >
        <img
          src={"/assets/images/icons/inactive_angle.svg"}
          alt={"Right Angle Icon"}
          className={`transform rotate-180`}
        />
      </div>
    );
  }
};

export default WordRightPageTurner;
