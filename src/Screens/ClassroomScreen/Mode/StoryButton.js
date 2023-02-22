import { useRecoilState } from "recoil";
import modeAtom from "../../../Stores/Classroom/mode";
import centralMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import wordMicrophoneStateAtom from "../../../Stores/Classroom/Word/wordMicrophoneState";
import currentPageAtom from "../../../Stores/Classroom/Story/currentPage";
import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";
import youDidItShownAtom from "../../../Stores/Classroom/youDidItShown";

const StoryButton = () => {
  const [mode, setMode] = useRecoilState(modeAtom);
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  const [wordMicrophoneState, setWordMicrophoneState] = useRecoilState(
    wordMicrophoneStateAtom
  );
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const [youDidItShown, setYouDidItShown] = useRecoilState(youDidItShownAtom);
  const onClickStoryButton = () => {
    if (
      centralMicrophoneState !== "invisible" &&
      centralMicrophoneState !== "loading" &&
      wordMicrophoneState !== "recording" &&
      wordMicrophoneState !== "loading"
    ) {
      setYouDidItShown(false);
      setCurrentPage(0);
      setCurrentWordPage(1);
      setMode("story");
    }
  };
  return (
    <div
      className={`w-[100px] h-[100px] bg-white flex flex-col items-center justify-center rounded-lg shadow-md border-[3px] border-[transparent] ${
        centralMicrophoneState !== "invisible" &&
        centralMicrophoneState !== "loading" &&
        wordMicrophoneState !== "recording" &&
        wordMicrophoneState !== "loading"
          ? `cursor-pointer`
          : ``
      } ${
        mode === "story" ? "border-[3px] border-[#47C7D2]" : ""
      } transition duration-200 ease-in-out}`}
      onClick={onClickStoryButton}
    >
      <img src={"/assets/images/icons/story_icon.svg"} alt={"Story Icon"} />
      <p
        className={`font-[Jua] text-[20px] ${
          mode === "story" && `text-[#1AB9C5]`
        }`}
      >
        Story
      </p>
    </div>
  );
};

export default StoryButton;
