import { useRecoilState } from "recoil";
import modeAtom from "../../../Stores/Classroom/mode";
import centralMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";

const WordButton = () => {
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  const [mode, setMode] = useRecoilState(modeAtom);
  const onClickWordButton = () => {
    if (
      centralMicrophoneState !== "invisible" &&
      centralMicrophoneState !== "loading"
    ) {
      setMode("word");
    }
  };
  return (
    <div className={`mb-3`}>
      <div
        className={`w-[100px] h-[100px] bg-white flex flex-col items-center justify-center rounded-lg shadow-md border-[3px] border-[transparent] ${
          centralMicrophoneState !== "invisible" &&
          centralMicrophoneState !== "loading"
            ? `cursor-pointer`
            : ``
        } ${
          mode === "word" ? "border-[3px] border-[#47C7D2]" : ""
        } transition duration-200 ease-in-out}`}
        onClick={onClickWordButton}
      >
        <img src={"/assets/images/icons/word_icon.svg"} alt={"Word Icon"} />
        <p className={`font-[Jua] text-[20px]`}>Word</p>
      </div>
    </div>
  );
};

export default WordButton;
