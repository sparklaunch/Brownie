import BookContent from "./BookContent";
import ModeButtons from "../ModeButtons";
import LeftPageTurner from "./Pager/LeftPageTurner";
import RightPageTurner from "./Pager/RightPageTurner";
import PageControllers from "./Controllers/PageControllers";
import HomeButton from "../HomeButton";
import Navigator from "./Navigator/Navigator";
import BookTitle from "./BookTitle";
import CentralMicrophone from "./Microphone/Center/CentralMicrophone";

const Book = () => {
  return (
    <div
      className={`absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center overflow-clip`}
    >
      <div className={`w-[94vh] h-[62vh] relative`}>
        <div className={`absolute top-0 left-[-120px]`}>
          <ModeButtons />
        </div>
        <div className={`absolute top-[50%] left-[-80px] translate-y-[-50%]`}>
          <LeftPageTurner />
        </div>
        <div className={`absolute top-[50%] right-[-80px] translate-y-[-50%]`}>
          <RightPageTurner />
        </div>
        <div className={`absolute top-[-60px] right-0`}>
          <PageControllers />
        </div>
        <div className={`absolute top-[-60px] right-[-100px]`}>
          <HomeButton />
        </div>
        <div className={`absolute top-[-50px] left-0`}>
          <BookTitle />
        </div>
        <div
          className={`absolute bottom-[-100px] left-[50%] translate-x-[-50%]`}
        >
          <CentralMicrophone />
        </div>
        <Navigator />
        <BookContent />
      </div>
    </div>
  );
};

export default Book;
