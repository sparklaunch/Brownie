import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";
import useData from "../../../Hooks/useData";
import { WordCardContainer, WordCardText } from "./WordCardStyles";
import _ from "lodash";

const WordCard = () => {
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const words = useData("words");
  const playWordAudio = () => {
    new Audio(`/assets/audio/words/${words[currentWordPage - 1]}.wav`).play();
  };
  const onClickCardContainer = () => {
    return _.throttle(playWordAudio, 1000, { leading: true, trailing: true });
  };
  return (
    <WordCardContainer onClick={onClickCardContainer()}>
      <img
        src={"/assets/images/icons/megaphone_button.svg"}
        alt={"Megaphone"}
      />
      <WordCardText>{words[currentWordPage - 1]}</WordCardText>
    </WordCardContainer>
  );
};

export default WordCard;
