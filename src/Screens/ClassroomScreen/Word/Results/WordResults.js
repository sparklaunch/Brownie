import ExcellentBar from "./ExcellentBar";
import GoodBar from "./GoodBar";
import NiceTryBar from "./NiceTryBar";
import Constants from "../../../../Utilities/Constants";

const WordResults = ({ score }) => {
  if (score >= Constants.EXCELLENT_THRESHOLD) {
    return <ExcellentBar />;
  } else if (score >= Constants.GOOD_THRESHOLD) {
    return <GoodBar />;
  } else {
    return <NiceTryBar />;
  }
};

export default WordResults;
