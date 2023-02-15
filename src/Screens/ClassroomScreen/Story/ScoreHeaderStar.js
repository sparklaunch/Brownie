const ScoreHeaderStar = ({ filled }) => {
  if (filled) {
    return (
      <img
        src={`/assets/images/star_filled.svg`}
        alt={`Filled Star`}
        className={`w-[20px] h-[20px] mx-1`}
      />
    );
  } else {
    return (
      <img
        src={`/assets/images/star_empty.svg`}
        alt={`Empty Star`}
        className={`w-[20px] h-[20px] mx-1`}
      />
    );
  }
};

export default ScoreHeaderStar;
