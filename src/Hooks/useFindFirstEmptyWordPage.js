import { useRecoilValue } from "recoil";
import wordScoresAtom from "../Stores/Classroom/Word/wordScores";
import { useParams } from "react-router-dom";
import useData from "./useData";

const useFindFirstEmptyWordPage = () => {
  const { level } = useParams();
  const wordScores = useRecoilValue(wordScoresAtom);
  const words = useData(`words`);
  return () => {
    for (let i = 1; i <= words.length; i++) {
      if (wordScores[`${level}-${i}`] === undefined) {
        return i;
      }
    }
  };
};

export default useFindFirstEmptyWordPage;
