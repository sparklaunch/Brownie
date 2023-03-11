import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";
import { useRecoilValue } from "recoil";
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
  const currentWordPage = useRecoilValue(currentWordPageAtom);
  const playWordAudio = () => {
    const wordAudio = new Howl({
      src: [`/assets/audio/words/${words[currentWordPage - 1]}.wav`]
    });
    wordAudio.play();
  };
  const onClickMegaphone = () => {
    return _.throttle(playWordAudio, 1000, { leading: true, trailing: true }); // 1초에 한번씩만 실행되도록
  };
  const totalScore = useRecoilValue(totalScoreAtom);
  let textColor; // 점수에 따라 단어 색깔을 다르게 표시
  if (totalScore.score >= Constants.WORD_EXCELLENT_THRESHOLD) {
    textColor = Constants.TURQUOISE;
  } else if (totalScore.score >= Constants.WORD_GOOD_THRESHOLD) {
    textColor = Constants.TANGERINE;
  } else {
    textColor = Constants.RED;
  }
  return (
    <WordImageContainer>
      <WordIllustration
        src={`/assets/images/words/${bookID}_${words[currentWordPage - 1]
          .toLowerCase()
          .replace(" ", "")}.png`} // 단어 이미지 불러오기
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
