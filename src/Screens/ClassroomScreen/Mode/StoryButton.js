import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import modeAtom from "../../../Stores/Classroom/mode";
import centralMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import wordMicrophoneStateAtom from "../../../Stores/Classroom/Word/wordMicrophoneState";
import youDidItShownAtom from "../../../Stores/Classroom/youDidItShown";
import {
  StoryButtonContainer,
  StoryButtonImage,
  StoryButtonText
} from "./StoryButtonStyles";

const StoryButton = () => {
  const [mode, setMode] = useRecoilState(modeAtom);
  const centralMicrophoneState = useRecoilValue(centralMicrophoneStateAtom);
  const wordMicrophoneState = useRecoilValue(wordMicrophoneStateAtom);
  const setYouDidItShown = useSetRecoilState(youDidItShownAtom);
  const shouldStoryButtonEnabled =
    centralMicrophoneState !== "invisible" &&
    centralMicrophoneState !== "loading" &&
    wordMicrophoneState !== "recording" &&
    wordMicrophoneState !== "loading"; // 스토리 모드로 전환할 수 있는지를 판단합니다.
  const shouldStoryButtonActivated = mode === "story"; // 스토리 모드가 활성화되어 있는지를 판단합니다.
  const onClickStoryButton = () => {
    if (shouldStoryButtonEnabled) {
      setYouDidItShown(false);
      setMode("story");
    }
  };
  return (
    <StoryButtonContainer
      enabled={shouldStoryButtonEnabled} // 스토리 모드로 전환할 수 있는지를 판단합니다.
      activated={shouldStoryButtonActivated} // 스토리 모드가 활성화되어 있는지를 판단합니다.
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
