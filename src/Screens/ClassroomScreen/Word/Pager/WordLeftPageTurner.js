import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../../Stores/Classroom/Word/currentWordPage";

const WordLeftPageTurner = () => {
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const onClickLeftPageTurner = () => {
    setCurrentWordPage(Math.max(currentWordPage - 1, 1));
  };
  if (currentWordPage !== 1) {
    return (
      <div className={`cursor-pointer`} onClick={onClickLeftPageTurner}>
        <img
          src={"/assets/images/icons/active_angle.svg"}
          alt={"Left Angle Icon"}
          className={`transform rotate-180`}
        />
      </div>
    );
  } else {
    return (
      <div>
        <img
          src={"/assets/images/icons/inactive_angle.svg"}
          alt={"Left Angle Icon"}
        />
      </div>
    );
  }
};

export default WordLeftPageTurner;
