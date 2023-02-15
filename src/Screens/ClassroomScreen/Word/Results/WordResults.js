import ExcellentBar from "./ExcellentBar";
import GoodBar from "./GoodBar";
import NiceTryBar from "./NiceTryBar";

const WordResults = ({ score }) => {
  if (score >= 50) {
    return <ExcellentBar />;
  } else if (score >= 20) {
    return <GoodBar />;
  } else {
    return <NiceTryBar />;
  }
};

export default WordResults;
