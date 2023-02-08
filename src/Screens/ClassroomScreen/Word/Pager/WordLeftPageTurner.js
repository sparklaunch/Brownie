import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../../Stores/Classroom/Word/currentWordPage";

const WordLeftPageTurner = ({ visible }) => {
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const onClickLeftPageTurner = () => {
    setCurrentWordPage(Math.max(currentWordPage - 2, 0));
  };
  if (visible) {
    return (
      <div
        className={`absolute z-10 top-[50%] left-[10vw] translate-y-[-50%] cursor-pointer`}
        onClick={onClickLeftPageTurner}
      >
        <img
          src={"/assets/images/icons/left_angle_icon.svg"}
          alt={"Left Angle Icon"}
        />
      </div>
    );
  } else {
    return <></>;
  }
};

export default WordLeftPageTurner;
