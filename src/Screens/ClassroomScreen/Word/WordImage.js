import { useParams } from "react-router-dom";
import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";
import { useRecoilState } from "recoil";
import useData from "../../../Hooks/useData";
import { useSpeechSynthesis } from "react-speech-kit";

const WordImage = () => {
  const words = useData("words");
  const { level } = useParams();
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const { speak } = useSpeechSynthesis();
  const onClickMegaphone = () => {
    speak({
      text: words[currentWordPage - 1]
    });
  };
  return (
    <div
      className={`w-[76%] h-[76%] border-[24px] border-[#FFD53D] rounded-2xl flex flex-col justify-center items-center relative`}
    >
      <img
        src={`/assets/images/words/${level}-${words[currentWordPage - 1]}.png`}
        alt={words[currentWordPage - 1]}
        className={`w-[80%]`}
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
        <p className={`text-[#15B58F] font-black text-[60px]`}>
          {words[currentWordPage - 1]}
        </p>
      </div>
    </div>
  );
};

export default WordImage;
