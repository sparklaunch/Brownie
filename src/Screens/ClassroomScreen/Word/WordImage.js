import { useParams } from "react-router-dom";
import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";
import { useRecoilState } from "recoil";
import useData from "../../../Hooks/useData";
import { Howl } from "howler";
import totalScoreAtom from "../../../Stores/Classroom/Story/totalScore";

const WordImage = () => {
  const words = useData("words");
  const { level } = useParams();
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const onClickMegaphone = () => {
    const howl = new Howl({
      src: [`/assets/audio/words/${words[currentWordPage - 1]}.wav`],
      onload: () => {},
      onend: () => {}
    });
    howl.play();
  };
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  let textColor;
  if (totalScore.score >= 70) {
    textColor = "#15B58F";
  } else if (totalScore.score >= 40) {
    textColor = "#FF8200";
  } else {
    textColor = "#FF2442";
  }
  return (
    <div
      className={`w-[76%] h-[76%] rounded-2xl flex flex-col justify-center items-center relative`}
    >
      <img
        src={`/assets/images/words/${level}-${words[currentWordPage - 1]}.png`}
        alt={words[currentWordPage - 1]}
        className={`w-[60%] translate-y-[-10%]`}
      />
      <div
        className={`absolute bottom-0 left-[50%] translate-x-[-50%] flex flex-row items-center justify-center`}
      >
        <img
          src={`/assets/images/icons/megaphone_button.svg`}
          alt="Megaphone Button"
          className={`mr-3 cursor-pointer`}
          onClick={onClickMegaphone}
        />
        <p className={`text-[${textColor}] font-black text-[60px]`}>
          {words[currentWordPage - 1]}
        </p>
      </div>
    </div>
  );
};

export default WordImage;
