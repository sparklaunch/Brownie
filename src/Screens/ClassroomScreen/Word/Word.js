import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";
import useData from "../../../Hooks/useData";
import { Howl } from "howler";
import centralMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";

const Word = () => {
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  const words = useData("words");
  const onClickMegaphone = () => {
    const howl = new Howl({
      src: [`/assets/audio/words/${words[currentWordPage - 1]}.wav`],
      onplay: () => {
        setCentralMicrophoneState("disabled");
      },
      onend: () => {
        setCentralMicrophoneState("idle");
      }
    });
    howl.play();
  };
  return (
    <div className={`h-full flex flex-row justify-center items-center`}>
      <img
        src={"/assets/images/icons/megaphone_button.svg"}
        alt={"Megaphone"}
        className={`cursor-pointer`}
        onClick={onClickMegaphone}
      />
      <p className={`text-[120px] font-[900] ml-[24px]`}>
        {words[currentWordPage - 1]}
      </p>
    </div>
  );
};

export default Word;
