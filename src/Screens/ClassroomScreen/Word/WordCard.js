import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";
import useData from "../../../Hooks/useData";
import { WordCardContainer, WordCardText } from "./WordCardStyles";

const WordCard = () => {
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const words = useData("words");
  return (
    <WordCardContainer>
      <img
        src={"/assets/images/icons/megaphone_button.svg"}
        alt={"Megaphone"}
      />
      <WordCardText>{words[currentWordPage - 1]}</WordCardText>
    </WordCardContainer>
  );
};

export default WordCard;
