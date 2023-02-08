import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../../Stores/Classroom/Word/currentWordPage";

const WordLeftPageTurner = ({ visible }) => {
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const onClickLeftPageTurner = () => {
    setCurrentWordPage(Math.max(currentWordPage - 1, 1));
  };
  if (visible) {
    return (
      <div
        className={`absolute z-10 top-[50%] left-[10vw] translate-y-[-50%] cursor-pointer`}
        onClick={onClickLeftPageTurner}
      >
        <img
          src={"/assets/images/icons/active_angle.svg"}
          alt={"Left Angle Icon"}
          className={`transform rotate-180`}
        />
      </div>
    );
  } else {
    return (
      <div className={`absolute z-10 top-[50%] left-[10vw] translate-y-[-50%]`}>
        <img
          src={"/assets/images/icons/inactive_angle.svg"}
          alt={"Left Angle Icon"}
        />
      </div>
    );
  }
};

export default WordLeftPageTurner;
