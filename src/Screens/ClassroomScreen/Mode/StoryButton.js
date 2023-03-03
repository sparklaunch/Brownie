import { useRecoilState } from "recoil";
import modeAtom from "../../../Stores/Classroom/mode";
import centralMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import wordMicrophoneStateAtom from "../../../Stores/Classroom/Word/wordMicrophoneState";
import currentPageAtom from "../../../Stores/Classroom/Story/currentPage";
import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";
import youDidItShownAtom from "../../../Stores/Classroom/youDidItShown";
import {
  StoryButtonContainer,
  StoryButtonImage,
  StoryButtonText
} from "./StoryButtonStyles";

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
  const shouldStoryButtonEnabled =
    centralMicrophoneState !== "invisible" &&
    centralMicrophoneState !== "loading" &&
    wordMicrophoneState !== "recording" &&
    wordMicrophoneState !== "loading";
  const shouldStoryButtonActivated = mode === "story";
  const onClickStoryButton = () => {
    if (shouldStoryButtonEnabled) {
      setYouDidItShown(false);
      setMode("story");
    }
  };
  return (
    <StoryButtonContainer
      enabled={shouldStoryButtonEnabled}
      activated={shouldStoryButtonActivated}
      onClick={onClickStoryButton}
    >
      <StoryButtonImage
        src={"/assets/images/icons/story_icon.svg"}
        alt={"Story Icon"}
      />
      <StoryButtonText activated={shouldStoryButtonActivated}>
        Story
      </StoryButtonText>
    </StoryButtonContainer>
  );
};

export default StoryButton;
