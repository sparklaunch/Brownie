import { useRecoilState } from "recoil";
import modeAtom from "../../Stores/Classroom/mode";

const WordButton = () => {
  const [mode, setMode] = useRecoilState(modeAtom);
  return (
    <div
      className={`w-[100px] h-[100px] bg-white flex flex-col items-center justify-center rounded-lg shadow-md border-[3px] border-[transparent] cursor-pointer ${
        mode === "word" ? "border-[3px] border-[#47C7D2]" : ""
      } transition duration-200 ease-in-out}`}
      onClick={() => setMode("word")}
    >
      <img src={"/assets/images/icons/word_icon.svg"} alt={"Word Icon"} />
      <p className={`font-[Jua] text-[20px]`}>Word</p>
    </div>
  );
};

export default WordButton;
