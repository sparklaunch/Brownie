import { ScoreStarImage } from "./ScoreStarStyles";

const ScoreStar = ({ filled }) => {
  if (filled) {
    return (
      <ScoreStarImage
        src={`/assets/images/star_filled.svg`}
        alt={`Filled Star`}
      />
    );
  } else {
    return (
      <ScoreStarImage
        src={`/assets/images/star_empty.svg`}
        alt={`Empty Star`}
      />
    );
  }
};

export default ScoreStar;
