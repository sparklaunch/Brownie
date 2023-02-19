import { useRecoilState } from "recoil";
import centralMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import youDidItShownAtom from "../../../Stores/Classroom/youDidItShown";
import {
  BookContainer,
  BookContentContainer,
  BookTitleContainer,
  CentralMicrophoneContainer,
  HomeButtonContainer,
  LeftPageTurnerContainer,
  ModeButtonsContainer,
  PageControllersContainer,
  RightPageTurnerContainer
} from "./BookStyles";
import BookContent from "./BookContent";
import ModeButtons from "../Mode/ModeButtons";
import LeftPageTurner from "./Pager/LeftPageTurner";
import RightPageTurner from "./Pager/RightPageTurner";
import PageControllers from "./Controllers/PageControllers";
import HomeButton from "../HomeButton";
import BookTitle from "./BookTitle";
import CentralMicrophone from "./Microphone/Center/CentralMicrophone";

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
      <PageControllersContainer>
        <PageControllers />
      </PageControllersContainer>
      <HomeButtonContainer>
        <HomeButton />
      </HomeButtonContainer>
      <BookTitleContainer>
        <BookTitle />
      </BookTitleContainer>
      <CentralMicrophoneContainer>
        <CentralMicrophone />
      </CentralMicrophoneContainer>
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
