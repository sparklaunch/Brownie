import data from "../data.json";
import { useParams } from "react-router-dom";

const useData = (type) => {
  const { level } = useParams();
  const stringData = JSON.stringify(data);
  const objectData = JSON.parse(stringData);
  switch (type) {
    case "sentences":
      return objectData.find((item) => {
        return item.level === level;
      }).sentences;
    case "words":
      return objectData.find((item) => {
        return item.level === level;
      }).words;
  }
};

export default useData;
