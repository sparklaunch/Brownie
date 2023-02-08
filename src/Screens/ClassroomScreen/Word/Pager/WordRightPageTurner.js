import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../../Stores/Classroom/Word/currentWordPage";

const WordRightPageTurner = ({ visible }) => {
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const onClickRightPageTurner = () => {
    setCurrentWordPage(Math.min(currentWordPage + 2, 10));
  };
  if (visible) {
    return (
      <div
        className={`absolute z-10 top-[50%] right-[10vw] translate-y-[-50%] cursor-pointer`}
        onClick={onClickRightPageTurner}
      >
        <img
          src={"/assets/images/icons/right_angle_icon.svg"}
          alt={"Right Angle Icon"}
        />
      </div>
    );
  } else {
    return <></>;
  }
};

export default WordRightPageTurner;
