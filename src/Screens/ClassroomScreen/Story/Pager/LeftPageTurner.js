import { useRecoilState } from "recoil";
import currentPageAtom from "../../../../Stores/Classroom/Story/currentPage";
import centralMicrophoneStateAtom from "../../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import {
  LeftPageTurnerContainer,
  LeftPageTurnerImage,
  RotatedLeftPageTurnerImage
} from "./LeftPageTurnerStyles";

const LeftPageTurner = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const onClickLeftPageTurner = () => {
    setCurrentPage(Math.max(currentPage - 2, 0));
  };
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  if (
    currentPage !== 0 &&
    centralMicrophoneState !== "invisible" &&
    centralMicrophoneState !== "loading"
  ) {
    return (
      <LeftPageTurnerContainer onClick={onClickLeftPageTurner}>
        <RotatedLeftPageTurnerImage
          src={"/assets/images/icons/active_angle.svg"}
          alt={"Left Angle Icon"}
        />
      </LeftPageTurnerContainer>
    );
  } else {
    return (
      <LeftPageTurnerImage
        src={"/assets/images/icons/inactive_angle.svg"}
        alt={"Left Angle Icon"}
      />
    );
  }
};

export default LeftPageTurner;
