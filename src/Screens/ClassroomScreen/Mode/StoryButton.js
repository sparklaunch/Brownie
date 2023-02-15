import { useRecoilState } from "recoil";
import modeAtom from "../../../Stores/Classroom/mode";
import centralMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import wordMicrophoneStateAtom from "../../../Stores/Classroom/Word/wordMicrophoneState";

const StoryButton = () => {
  const [mode, setMode] = useRecoilState(modeAtom);
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  const [wordMicrophoneState, setWordMicrophoneState] = useRecoilState(
    wordMicrophoneStateAtom
  );
  const onClickStoryButton = () => {
    if (
      centralMicrophoneState !== "invisible" &&
      centralMicrophoneState !== "loading" &&
      wordMicrophoneState !== "recording" &&
      wordMicrophoneState !== "loading"
    ) {
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
      <p className={`font-[Jua] text-[20px]`}>Story</p>
    </div>
  );
};

export default StoryButton;
