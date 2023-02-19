import { useRecoilState } from "recoil";
import centralMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import youDidItShownAtom from "../../../Stores/Classroom/youDidItShown";
import { BookContainer, BookContentContainer } from "./BookStyles";
import BookContent from "./BookContent";

const Book = () => {
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  const [youDidItShown, setYouDidItShown] = useRecoilState(youDidItShownAtom);
  return (
    <BookContainer>
      {/*<div className={`absolute top-0 left-[-120px]`}>*/}
      {/*  <ModeButtons />*/}
      {/*</div>*/}
      {/*<div className={`absolute top-[50%] left-[-80px] translate-y-[-50%]`}>*/}
      {/*  <LeftPageTurner />*/}
      {/*</div>*/}
      {/*<div className={`absolute top-[50%] right-[-80px] translate-y-[-50%]`}>*/}
      {/*  <RightPageTurner />*/}
      {/*</div>*/}
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
      <BookContentContainer>
        <BookContent />
      </BookContentContainer>
      {/*{youDidItShown && (*/}
      {/*  <div className={`absolute top-0 left-0 bottom-0 right-0 z-[3]`}>*/}
      {/*    <YouDidItScreen />*/}
      {/*  </div>*/}
      {/*)}*/}
    </BookContainer>
  );
};

export default Book;
