import { useRecoilState } from "recoil";
import modeAtom from "../../../Stores/Classroom/mode";
import centralMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import wordMicrophoneStateAtom from "../../../Stores/Classroom/Word/wordMicrophoneState";
import currentPageAtom from "../../../Stores/Classroom/Story/currentPage";
import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";
import youDidItShownAtom from "../../../Stores/Classroom/youDidItShown";
import {
  WordButtonImage,
  WordButtonInnerContainer,
  WordButtonOuterContainer,
  WordButtonText
} from "./WordButtonStyles";

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
  const shouldWordButtonEnabled =
    centralMicrophoneState !== "invisible" &&
    centralMicrophoneState !== "loading" &&
    wordMicrophoneState !== "recording" &&
    wordMicrophoneState !== "loading";
  const shouldWordButtonActivated = mode === "word";
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
    <WordButtonOuterContainer>
      <WordButtonInnerContainer
        enabled={shouldWordButtonEnabled}
        activated={shouldWordButtonActivated}
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
