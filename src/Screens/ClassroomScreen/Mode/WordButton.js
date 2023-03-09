import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import modeAtom from "../../../Stores/Classroom/mode";
import centralMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import wordMicrophoneStateAtom from "../../../Stores/Classroom/Word/wordMicrophoneState";
import youDidItShownAtom from "../../../Stores/Classroom/youDidItShown";
import {
  WordButtonImage,
  WordButtonInnerContainer,
  WordButtonOuterContainer,
  WordButtonText
} from "./WordButtonStyles";

const WordButton = () => {
  const centralMicrophoneState = useRecoilValue(centralMicrophoneStateAtom);
  const wordMicrophoneState = useRecoilValue(wordMicrophoneStateAtom);
  const [mode, setMode] = useRecoilState(modeAtom);
  const setYouDidItShown = useSetRecoilState(youDidItShownAtom);
  const shouldWordButtonEnabled =
    centralMicrophoneState !== "invisible" &&
    centralMicrophoneState !== "loading" &&
    wordMicrophoneState !== "recording" &&
    wordMicrophoneState !== "loading"; // 단어 모드로 전환할 수 있는지를 판단합니다.
  const shouldWordButtonActivated = mode === "word"; // 단어 모드가 활성화되어 있는지를 판단합니다.
  const onClickWordButton = () => {
    if (shouldWordButtonEnabled) {
      setYouDidItShown(false);
      setMode("word");
    }
  };
  return (
    <WordButtonOuterContainer>
      <WordButtonInnerContainer
        enabled={shouldWordButtonEnabled} // 단어 모드로 전환할 수 있는지를 판단합니다.
        activated={shouldWordButtonActivated} // 단어 모드가 활성화되어 있는지를 판단합니다.
        onClick={onClickWordButton}
      >
        <WordButtonImage
          src={"/assets/images/icons/word_icon.svg"}
          alt={"Word Icon"}
        />
        <WordButtonText activated={shouldWordButtonActivated}>
          Word
        </WordButtonText>
      </WordButtonInnerContainer>
    </WordButtonOuterContainer>
  );
};

export default WordButton;
