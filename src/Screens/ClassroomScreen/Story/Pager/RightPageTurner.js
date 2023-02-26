import { useRecoilState } from "recoil";
import currentPageAtom from "../../../../Stores/Classroom/Story/currentPage";
import centralMicrophoneStateAtom from "../../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import {
  RightPageTurnerContainer,
  RightPageTurnerImage,
  RotatedRightPageTurnerImage
} from "./RightPageTurnerStyles";

const RightPageTurner = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const onClickRightPageTurner = () => {
    setCurrentPage(Math.min(currentPage + 2, 10));
  };
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  if (
    currentPage !== 10 &&
    centralMicrophoneState !== "invisible" &&
    centralMicrophoneState !== "loading"
  ) {
    return (
      <RightPageTurnerContainer onClick={onClickRightPageTurner}>
        <RightPageTurnerImage
          src={"/assets/images/icons/active_angle.svg"}
          alt={"Right Angle Icon"}
        />
      </RightPageTurnerContainer>
    );
  } else {
    return (
      <RotatedRightPageTurnerImage
        src={"/assets/images/icons/inactive_angle.svg"}
        alt={"Right Angle Icon"}
      />
    );
  }
};

export default RightPageTurner;
