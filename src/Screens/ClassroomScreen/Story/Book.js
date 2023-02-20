import { useRecoilState } from "recoil";
import centralMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import youDidItShownAtom from "../../../Stores/Classroom/youDidItShown";
import { BookContainer, NavigatorContainer } from "./BookStyles";
import Navigator from "./Navigator/Navigator";
import resultsScreenShownAtom from "../../../Stores/Classroom/Story/resultsScreenShown";

const Book = () => {
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  const [resultsScreenShown, setResultsScreenShown] = useRecoilState(
    resultsScreenShownAtom
  );
  const [youDidItShown, setYouDidItShown] = useRecoilState(youDidItShownAtom);
  return (
    <BookContainer>
      <NavigatorContainer>
        <Navigator />
      </NavigatorContainer>
    </BookContainer>
  );
};

export default Book;
