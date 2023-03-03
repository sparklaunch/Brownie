import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";
import { useRecoilState } from "recoil";
import useData from "../../../Hooks/useData";
import totalScoreAtom from "../../../Stores/Classroom/Story/totalScore";
import Constants from "../../../Utilities/Constants";
import _ from "lodash";
import {
  MegaphoneImage,
  WordContainer,
  WordIllustration,
  WordImageContainer,
  WordText
} from "./WordImageStyles";
import { Howl } from "howler";

const WordImage = () => {
  const words = useData("words");
  const bookID = useData("id");
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const playWordAudio = () => {
    const audio = new Howl({
      src: [`/assets/audio/words/${words[currentWordPage - 1]}.wav`]
    });
    audio.play();
  };
  const onClickMegaphone = () => {
    return _.throttle(playWordAudio, 1000, { leading: true, trailing: true });
  };
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  let textColor;
  if (totalScore.score >= Constants.WORD_EXCELLENT_THRESHOLD) {
    textColor = Constants.TURQUOISE;
  } else if (totalScore.score >= Constants.WORD_GOOD_THRESHOLD) {
    textColor = "#FF8200";
  } else {
    textColor = "#FF2442";
  }
  return (
    <WordImageContainer>
      <WordIllustration
        src={`/assets/images/words/${bookID}_${words[currentWordPage - 1]
          .toLowerCase()
          .replace(" ", "")}.png`}
        alt={words[currentWordPage - 1]}
      />
      <WordContainer>
        <MegaphoneImage
          src={`/assets/images/icons/megaphone_button.svg`}
          alt="Megaphone Button"
          onClick={onClickMegaphone()}
        />
        <WordText color={textColor}>{words[currentWordPage - 1]}</WordText>
      </WordContainer>
    </WordImageContainer>
  );
};

export default WordImage;
