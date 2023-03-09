import data from "../data.json";
import { useParams } from "react-router-dom";

// 현재 레벨의 문장들, 단어들, 현재 교재의 아이디를 불러옵니다.
const useData = (type) => {
  const { level } = useParams(); // URL로부터 현재 교재의 레벨을 가져옵니다.
  const stringData = JSON.stringify(data);
  const objectData = JSON.parse(stringData);
  switch (type) {
    case "sentences": // 현재 레벨의 문장들을 불러옵니다.
      return objectData.find((item) => {
        return item.level === level;
      }).sentences;
    case "words": // 현재 레벨의 단어들을 불러옵니다.
      return objectData.find((item) => {
        return item.level === level;
      }).words;
    case "id": // 현 교재의 아이디를 불러옵니다.
      return objectData.find((item) => {
        return item.level === level;
      }).id;
  }
};

export default useData;
