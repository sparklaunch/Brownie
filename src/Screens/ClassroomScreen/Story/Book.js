import { useRecoilState } from "recoil";
import centralMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import youDidItShownAtom from "../../../Stores/Classroom/youDidItShown";
import {
  BookContainer,
  BookContentContainer,
  LeftPageTurnerContainer,
  ModeButtonsContainer,
  RightPageTurnerContainer
} from "./BookStyles";
import BookContent from "./BookContent";
import ModeButtons from "../Mode/ModeButtons";
import LeftPageTurner from "./Pager/LeftPageTurner";
import RightPageTurner from "./Pager/RightPageTurner";

const Book = () => {
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  const [youDidItShown, setYouDidItShown] = useRecoilState(youDidItShownAtom);
  return (
    <BookContainer>
      <BookContentContainer>
        <BookContent />
      </BookContentContainer>
      <ModeButtonsContainer>
        <ModeButtons />
      </ModeButtonsContainer>
      <LeftPageTurnerContainer>
        <LeftPageTurner />
      </LeftPageTurnerContainer>
      <RightPageTurnerContainer>
        <RightPageTurner />
      </RightPageTurnerContainer>
      {/*<div className={`absolute top-[-60px] right-0`}>*/}
      {/*  <PageControllers />*/}
      {/*</div>*/}
      {/*<div className={`absolute top-[-60px] right-[-100px]`}>*/}
      {/*  <HomeButton />*/}
      {/*</div>*/}
      {/*<div className={`absolute top-[-50px] left-0`}>*/}
      {/*  <BookTitle />*/}
      {/*</div>*/}
      {/*<div*/}
      {/*  className={`absolute bottom-[-100px] left-[50%] translate-x-[-50%]`}*/}
      {/*>*/}
      {/*  <CentralMicrophone />*/}
      {/*</div>*/}
      {/*{centralMicrophoneState === "invisible" && (*/}
      {/*  <div*/}
      {/*    className={`absolute bottom-[10%] left-[50%] translate-x-[-50%] z-10`}*/}
      {/*  >*/}
      {/*    <Wave />*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*{centralMicrophoneState === "loading" && (*/}
      {/*  <div*/}
      {/*    className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[3]`}*/}
      {/*  >*/}
      {/*    /!*<LoadingSpinner />*!/*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*<Navigator />*/}
      {/*{youDidItShown && (*/}
      {/*  <div className={`absolute top-0 left-0 bottom-0 right-0 z-[3]`}>*/}
      {/*    <YouDidItScreen />*/}
      {/*  </div>*/}
      {/*)}*/}
    </BookContainer>
  );
};

export default Book;
