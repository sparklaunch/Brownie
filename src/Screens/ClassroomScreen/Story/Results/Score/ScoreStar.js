const ScoreStar = ({ filled }) => {
  if (filled) {
    return (
      <img
        src={`/assets/images/star_filled.svg`}
        alt={`Filled Star`}
        className={`h-[26px] w-[26px] mx-1`}
      />
    );
  } else {
    return (
      <img
        src={`/assets/images/star_empty.svg`}
        alt={`Empty Star`}
        className={`h-[26px] w-[26px] mx-1`}
      />
    );
  }
};

export default ScoreStar;
