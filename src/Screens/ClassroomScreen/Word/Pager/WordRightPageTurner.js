import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../../Stores/Classroom/Word/currentWordPage";
import data from "../../../../data.json";
import { useParams } from "react-router-dom";

const WordRightPageTurner = ({ visible }) => {
  const { level } = useParams();
  const dataString = JSON.stringify(data);
  const dataObject = JSON.parse(dataString);
  const words = dataObject.find((item) => item.level === level).words;
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const onClickRightPageTurner = () => {
    setCurrentWordPage(Math.min(currentWordPage + 1, words.length));
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
