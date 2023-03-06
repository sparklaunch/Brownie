import { useRecoilState, useRecoilValue } from "recoil";
import currentPageAtom from "../../../../Stores/Classroom/Story/currentPage";
import LeftPageAngle from "./LeftPageAngle";
import RightPageAngle from "./RightPageAngle";
import centralMicrophoneStateAtom from "../../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import {
  CurrentPageText,
  FirstPageText,
  LeftPageAngleWrapper,
  PageAnglesContainer,
  PageControllersContainer,
  PageNumberSpan,
  RightPageAngleWrapper
} from "./PageControllersStyles";

const PageControllers = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const centralMicrophoneState = useRecoilValue(centralMicrophoneStateAtom);
  const centralMicrophoneAvailable =
    centralMicrophoneState !== "invisible" &&
    centralMicrophoneState !== "loading";
  const onClickFirstPage = () => {
    if (centralMicrophoneAvailable) {
      setCurrentPage(0);
    }
  };
  const onLeftPageButtonClick = () => {
    if (centralMicrophoneAvailable) {
      setCurrentPage(Math.max(currentPage - 2, 0));
    }
  };
  const onRightPageButtonClick = () => {
    if (centralMicrophoneAvailable) {
      setCurrentPage(Math.min(currentPage + 2, 10));
    }
  };
  return (
    <PageControllersContainer>
      <FirstPageText
        available={centralMicrophoneAvailable}
        onClick={onClickFirstPage}
      >
        처음으로
      </FirstPageText>
      <PageAnglesContainer>
        <LeftPageAngleWrapper onClick={onLeftPageButtonClick}>
          <LeftPageAngle
            disabled={
              currentPage <= 0 ||
              centralMicrophoneState === "invisible" ||
              centralMicrophoneState === "loading"
            }
          />
        </LeftPageAngleWrapper>
        <CurrentPageText>
          {Math.min(currentPage + 1, 10)}
          <PageNumberSpan>/10</PageNumberSpan>
        </CurrentPageText>
        <RightPageAngleWrapper onClick={onRightPageButtonClick}>
          <RightPageAngle
            disabled={
              currentPage >= 10 ||
              centralMicrophoneState === "invisible" ||
              centralMicrophoneState === "loading"
            }
          />
        </RightPageAngleWrapper>
      </PageAnglesContainer>
    </PageControllersContainer>
  );
};

export default PageControllers;
