import Instructions from "./Instructions";
import WordCard from "./WordCard";
import Pagination from "./Pagination";
import Microphone from "./Microphone/Microphone";
import ModeButtons from "../ModeButtons";
import WordLeftPageTurner from "./Pager/WordLeftPageTurner";
import WordRightPageTurner from "./Pager/WordRightPageTurner";
import CardTitle from "./CardTitle";
import HomeButton from "../HomeButton";

const Card = () => {
  return (
    <div
      className={`absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center overflow-clip`}
    >
      <div
        className={`w-[94vh] h-[62vh] relative bg-white rounded-2xl shadow-2xl`}
      >
        <div className={`absolute top-[20px] left-[20px]`}>
          <Instructions />
        </div>
        <div className={`absolute top-[20px] right-[20px]`}>
          <Pagination />
        </div>
        <div
          className={`absolute top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-center`}
        >
          <WordCard />
        </div>
        <div className={`absolute top-0 left-[-120px]`}>
          <ModeButtons />
        </div>
        <div className={`absolute top-[50%] left-[-80px] translate-y-[-50%]`}>
          <WordLeftPageTurner />
        </div>
        <div className={`absolute top-[50%] right-[-80px] translate-y-[-50%]`}>
          <WordRightPageTurner />
        </div>
        <div className={`absolute top-[-50px] left-0`}>
          <CardTitle />
        </div>
        <div className={`absolute top-[-60px] right-[-100px]`}>
          <HomeButton />
        </div>
        <Microphone />
      </div>
    </div>
  );
};

export default Card;
