import ScoreHeaderStars from "./ScoreHeaderStars";
import ScoreHeaderText from "./ScoreHeaderText";

const ScoreHeader = ({ score }) => {
  if (score >= 50) {
    return (
      <div
        className={`flex flex-row items-center justify-center bg-white rounded-full px-5 py-1 border-2 shadow-lg border-[#15B58F]`}
      >
        <ScoreHeaderStars score={2} />
        <ScoreHeaderText score={2} />
      </div>
    );
  } else if (score >= 20) {
    return (
      <div
        className={`flex flex-row items-center justify-center bg-white rounded-full px-5 py-1 border-2 shadow-lg border-[#FF8200]`}
      >
        <ScoreHeaderStars score={1} />
        <ScoreHeaderText score={1} />
      </div>
    );
  } else {
    return (
      <div
        className={`flex flex-row items-center justify-center bg-white rounded-full px-5 py-1 border-2 shadow-lg border-[#FF2442]`}
      >
        <ScoreHeaderStars score={0} />
        <ScoreHeaderText score={0} />
      </div>
    );
  }
};

export default ScoreHeader;