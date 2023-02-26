import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../../Stores/Classroom/Word/currentWordPage";
import wordMicrophoneStateAtom from "../../../../Stores/Classroom/Word/wordMicrophoneState";
import {
  RotatedWordLeftPageTurnerImage,
  WordLeftPageTurnerContainer,
  WordLeftPageTurnerImage
} from "./WordLeftPageTurnerStyles";

const WordLeftPageTurner = () => {
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const [wordMicrophoneState, setWordMicrophoneState] = useRecoilState(
    wordMicrophoneStateAtom
  );
  const onClickLeftPageTurner = () => {
    setCurrentWordPage(Math.max(currentWordPage - 1, 1));
  };
  if (
    currentWordPage !== 1 &&
    wordMicrophoneState !== "recording" &&
    wordMicrophoneState !== "loading"
  ) {
    return (
      <WordLeftPageTurnerContainer onClick={onClickLeftPageTurner}>
        <RotatedWordLeftPageTurnerImage
          src={"/assets/images/icons/active_angle.svg"}
          alt={"Left Angle Icon"}
        />
      </WordLeftPageTurnerContainer>
    );
  } else {
    return (
      <WordLeftPageTurnerImage
        src={"/assets/images/icons/inactive_angle.svg"}
        alt={"Left Angle Icon"}
      />
    );
  }
};

export default WordLeftPageTurner;
