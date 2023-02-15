import ScoreStars from "../../Story/Results/Score/ScoreStars";
import ScoreText from "../../Story/Results/Score/ScoreText";

const NiceTryBar = () => {
  return (
    <div
      className={`flex flex-row items-center justify-center bg-white rounded-full px-8 py-1 border-2 shadow-lg border-[#FF2442] scale-[0.6]`}
    >
      <ScoreStars />
      <ScoreText />
    </div>
  );
};

export default NiceTryBar;
