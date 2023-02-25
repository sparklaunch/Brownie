import { useRecoilState } from "recoil";
import modeAtom from "../../../Stores/Classroom/mode";
import centralMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import wordMicrophoneStateAtom from "../../../Stores/Classroom/Word/wordMicrophoneState";
import currentPageAtom from "../../../Stores/Classroom/Story/currentPage";
import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";
import youDidItShownAtom from "../../../Stores/Classroom/youDidItShown";
import { StoryButtonContainer } from "./StoryButtonStyles";

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
  const shouldStoryButtonEnabled =
    centralMicrophoneState !== "invisible" &&
    centralMicrophoneState !== "loading" &&
    wordMicrophoneState !== "recording" &&
    wordMicrophoneState !== "loading";
  const shouldStoryButtonActivated = mode === "story";
  return (
    <StoryButtonContainer
      enabled={shouldStoryButtonEnabled}
      activated={shouldStoryButtonActivated}
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
    </StoryButtonContainer>
  );
};

export default StoryButton;
