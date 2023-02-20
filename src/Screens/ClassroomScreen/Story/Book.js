import { useRecoilState } from "recoil";
import centralMicrophoneStateAtom from "../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import youDidItShownAtom from "../../../Stores/Classroom/youDidItShown";
import {
  BookContainer,
  BookWrapper,
  LeftPageImage,
  NavigatorContainer,
  RightPageImage,
  TextBookContainer,
  TextBookLeftPage,
  TextBookRightPage
} from "./BookStyles";
import Navigator from "./Navigator/Navigator";
import resultsScreenShownAtom from "../../../Stores/Classroom/Story/resultsScreenShown";
import currentPageAtom from "../../../Stores/Classroom/Story/currentPage";
import useData from "../../../Hooks/useData";
import { useParams } from "react-router-dom";

const Book = () => {
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  const [resultsScreenShown, setResultsScreenShown] = useRecoilState(
    resultsScreenShownAtom
  );
  const [youDidItShown, setYouDidItShown] = useRecoilState(youDidItShownAtom);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const { level } = useParams();
  const bookID = useData("id");
  return (
    <BookContainer>
      <NavigatorContainer>
        <Navigator />
      </NavigatorContainer>
      <BookWrapper>
        <TextBookContainer>
          <TextBookLeftPage>
            <LeftPageImage
              src={`/assets/images/pages/${bookID}_${currentPage}.jpg`}
            />
          </TextBookLeftPage>
          <TextBookRightPage>
            <RightPageImage
              src={`/assets/images/pages/${bookID}_${currentPage + 1}.jpg`}
            />
          </TextBookRightPage>
        </TextBookContainer>
      </BookWrapper>
    </BookContainer>
  );
};

export default Book;
