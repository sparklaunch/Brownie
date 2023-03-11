import { useRecoilValue } from "recoil";
import wordScoresAtom from "../Stores/Classroom/Word/wordScores";
import { useParams } from "react-router-dom";
import useData from "./useData";

// 현재 레벨의 단어들 중에서 아직 풀지 않은 단어의 페이지를 찾아서 반환합니다.
const useFindFirstEmptyWordPage = () => {
  const { level } = useParams();
  const wordScores = useRecoilValue(wordScoresAtom);
  const words = useData(`words`); // 현재 레벨의 단어들을 불러옵니다.
  return () => {
    for (let i = 1; i <= words.length; i++) {
      // 현재 레벨의 단어들을 순회합니다.
      if (wordScores[`${level}-${i}`] === undefined) {
        // 현재 단어가 풀리지 않았다면,
        return i; // 현재 단어의 페이지를 반환합니다.
      }
    }
  };
};

export default useFindFirstEmptyWordPage;
