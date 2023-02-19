import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";
import useData from "../../../Hooks/useData";
import { WordCardContainer } from "./WordCardStyles";

const WordCard = () => {
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const words = useData("words");
  const onClickMegaphone = () => {
    new Audio(`/assets/audio/words/${words[currentWordPage - 1]}.wav`).play();
  };
  return (
    <WordCardContainer>
      <img
        src={"/assets/images/icons/megaphone_button.svg"}
        alt={"Megaphone"}
        className={`cursor-pointer`}
        onClick={onClickMegaphone}
      />
      <p className={`text-[120px] font-[900] ml-[24px]`}>
        {words[currentWordPage - 1]}
      </p>
    </WordCardContainer>
  );
};

export default WordCard;
