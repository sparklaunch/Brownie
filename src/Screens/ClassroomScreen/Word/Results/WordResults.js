import ExcellentBar from "./ExcellentBar";
import GoodBar from "./GoodBar";
import NiceTryBar from "./NiceTryBar";

const WordResults = ({ score }) => {
  if (score >= 70) {
    return <ExcellentBar />;
  } else if (score >= 40) {
    return <GoodBar />;
  } else {
    return <NiceTryBar />;
  }
};

export default WordResults;
