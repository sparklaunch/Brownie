import WordCard from "./WordCard";
import Instructions from "./Instructions";
import Pagination from "./Pagination";

const CardContent = () => {
  return (
    <div className={`relative`}>
      <Instructions />
      <WordCard />
      <Pagination />
    </div>
  );
};

export default CardContent;
