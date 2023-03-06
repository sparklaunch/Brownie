import { useRecoilState, useRecoilValue } from "recoil";
import currentWordPageAtom from "../../../../Stores/Classroom/Word/currentWordPage";
import useData from "../../../../Hooks/useData";
import wordMicrophoneStateAtom from "../../../../Stores/Classroom/Word/wordMicrophoneState";
import {
  RotatedWordRightPageTurnerImage,
  WordRightPageTurnerContainer,
  WordRightPageTurnerImage
} from "./WordRightPageTurnerStyles";

const WordRightPageTurner = () => {
  const words = useData("words");
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const wordMicrophoneState = useRecoilValue(wordMicrophoneStateAtom);
  const onClickRightPageTurner = () => {
    setCurrentWordPage(Math.min(currentWordPage + 1, words.length));
  };
  if (
    currentWordPage !== words.length &&
    wordMicrophoneState !== "recording" &&
    wordMicrophoneState !== "loading"
  ) {
    return (
      <WordRightPageTurnerContainer onClick={onClickRightPageTurner}>
        <WordRightPageTurnerImage
          src={"/assets/images/icons/active_angle.svg"}
          alt={"Right Angle Icon"}
        />
      </WordRightPageTurnerContainer>
    );
  } else {
    return (
      <RotatedWordRightPageTurnerImage
        src={"/assets/images/icons/inactive_angle.svg"}
        alt={"Right Angle Icon"}
      />
    );
  }
};

export default WordRightPageTurner;
