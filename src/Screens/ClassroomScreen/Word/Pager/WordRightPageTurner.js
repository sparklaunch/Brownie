import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../../Stores/Classroom/Word/currentWordPage";
import data from "../../../../data.json";
import { useParams } from "react-router-dom";

const WordRightPageTurner = () => {
  const { level } = useParams();
  const dataString = JSON.stringify(data);
  const dataObject = JSON.parse(dataString);
  const words = dataObject.find((item) => item.level === level).words;
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const onClickRightPageTurner = () => {
    setCurrentWordPage(Math.min(currentWordPage + 1, words.length));
  };
  if (currentWordPage !== words.length) {
    return (
      <div className={`cursor-pointer`} onClick={onClickRightPageTurner}>
        <img
          src={"/assets/images/icons/active_angle.svg"}
          alt={"Right Angle Icon"}
        />
      </div>
    );
  } else {
    return (
      <div>
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
