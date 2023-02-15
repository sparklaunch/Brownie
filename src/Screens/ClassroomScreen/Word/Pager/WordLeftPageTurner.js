import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../../Stores/Classroom/Word/currentWordPage";
import wordMicrophoneStateAtom from "../../../../Stores/Classroom/Word/wordMicrophoneState";

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
      <div className={`cursor-pointer`} onClick={onClickLeftPageTurner}>
        <img
          src={"/assets/images/icons/active_angle.svg"}
          alt={"Left Angle Icon"}
          className={`transform rotate-180`}
        />
      </div>
    );
  } else {
    return (
      <div>
        <img
          src={"/assets/images/icons/inactive_angle.svg"}
          alt={"Left Angle Icon"}
        />
      </div>
    );
  }
};

export default WordLeftPageTurner;
