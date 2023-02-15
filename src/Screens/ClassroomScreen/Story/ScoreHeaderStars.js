import ScoreHeaderStar from "./ScoreHeaderStar";

const ScoreHeaderStars = ({ score }) => {
  return (
    <div className={`flex flex-row`}>
      <ScoreHeaderStar filled={score >= 0} />
      <ScoreHeaderStar filled={score >= 1} />
      <ScoreHeaderStar filled={score >= 2} />
    </div>
  );
};

export default ScoreHeaderStars;
