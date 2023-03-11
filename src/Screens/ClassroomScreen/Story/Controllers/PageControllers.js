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
    centralMicrophoneState !== "loading"; // 중앙 마이크가 사용 가능한지를 판단합니다.
  const onClickFirstPage = () => {
    if (centralMicrophoneAvailable) {
      // 중앙 마이크가 사용 가능하다면,
      setCurrentPage(0); // 첫 페이지로 이동합니다.
    }
  };
  const onLeftPageButtonClick = () => {
    if (centralMicrophoneAvailable) {
      // 중앙 마이크가 사용 가능하다면,
      setCurrentPage(Math.max(currentPage - 2, 0)); // 첫 페이지로 이동합니다.
    }
  };
  const onRightPageButtonClick = () => {
    if (centralMicrophoneAvailable) {
      // 중앙 마이크가 사용 가능하다면,
      setCurrentPage(Math.min(currentPage + 2, 10)); // 마지막 페이지로 이동합니다.
    }
  };
  return (
    <PageControllersContainer>
      <FirstPageText
        available={centralMicrophoneAvailable} // 중앙 마이크가 사용 가능한지를 판단합니다.
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
            } // 중앙 마이크가 사용 가능한지를 판단합니다.
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
            } // 중앙 마이크가 사용 가능한지를 판단합니다.
          />
        </RightPageAngleWrapper>
      </PageAnglesContainer>
    </PageControllersContainer>
  );
};

export default PageControllers;
