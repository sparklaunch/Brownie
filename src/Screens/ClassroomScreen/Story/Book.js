import { useRecoilState } from "recoil";
import resultsScreenShownAtom from "../../../Stores/Classroom/Story/resultsScreenShown";
import BookContent from "./BookContent";
import ModeButtons from "../ModeButtons";
import LeftPageTurner from "./Pager/LeftPageTurner";
import RightPageTurner from "./Pager/RightPageTurner";
import PageControllers from "./Controllers/PageControllers";
import HomeButton from "../HomeButton";
import Navigator from "./Navigator/Navigator";

const Book = () => {
  const [resultsScreenShown, setResultsScreenShown] = useRecoilState(
    resultsScreenShownAtom
  );
  return (
    <div
      className={`absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center overflow-clip`}
    >
      <div className={`w-[912px] h-[600px] relative`}>
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
        <Navigator />
        <BookContent />
      </div>
    </div>
  );
};

export default Book;
