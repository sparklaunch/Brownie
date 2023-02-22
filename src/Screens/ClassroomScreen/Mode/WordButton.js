import { useRecoilState } from "recoil";
import modeAtom from "../../../Stores/Classroom/mode";
import centralMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import wordMicrophoneStateAtom from "../../../Stores/Classroom/Word/wordMicrophoneState";
import currentPageAtom from "../../../Stores/Classroom/Story/currentPage";
import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";
import youDidItShownAtom from "../../../Stores/Classroom/youDidItShown";

const WordButton = () => {
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  const [wordMicrophoneState, setWordMicrophoneState] = useRecoilState(
    wordMicrophoneStateAtom
  );
  const [mode, setMode] = useRecoilState(modeAtom);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const [youDidItShown, setYouDidItShown] = useRecoilState(youDidItShownAtom);
  const onClickWordButton = () => {
    if (
      centralMicrophoneState !== "invisible" &&
      centralMicrophoneState !== "loading" &&
      wordMicrophoneState !== "recording" &&
      wordMicrophoneState !== "loading"
    ) {
      setYouDidItShown(false);
      setCurrentPage(0);
      setCurrentWordPage(1);
      setMode("word");
    }
  };
  return (
    <div className={`mb-3`}>
      <div
        className={`w-[100px] h-[100px] bg-white flex flex-col items-center justify-center rounded-lg shadow-md border-[3px] border-[transparent] ${
          centralMicrophoneState !== "invisible" &&
          centralMicrophoneState !== "loading" &&
          wordMicrophoneState !== "recording" &&
          wordMicrophoneState !== "loading"
            ? `cursor-pointer`
            : ``
        } ${
          mode === "word" ? "border-[3px] border-[#47C7D2]" : ""
        } transition duration-200 ease-in-out}`}
        onClick={onClickWordButton}
      >
        <img src={"/assets/images/icons/word_icon.svg"} alt={"Word Icon"} />
        <p
          className={`font-[Jua] text-[20px] ${
            mode === "word" && `text-[#1AB9C5]`
          }`}
        >
          Word
        </p>
      </div>
    </div>
  );
};

export default WordButton;
