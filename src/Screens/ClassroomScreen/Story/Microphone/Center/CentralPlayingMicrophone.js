import { Howler } from "howler";
import { useRecoilState } from "recoil";
import centralMicrophoneStateAtom from "../../../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import {
  CentralPlayingMicrophoneContainer,
  CentralPlayingMicrophoneImage,
  InnerCircle,
  OuterCircle,
  Wave
} from "./CentralPlayingMicrophoneStyles";

const CentralPlayingMicrophone = () => {
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  const onClickPlayingMicrophone = () => {
    Howler.unload();
    setCentralMicrophoneState("idle");
  };
  return (
    <CentralPlayingMicrophoneContainer onClick={onClickPlayingMicrophone}>
      <>
        <OuterCircle />
        <InnerCircle />
        <Wave />
      </>
      <CentralPlayingMicrophoneImage
        src={`/assets/images/icons/microphone_idle.svg`}
        alt={"Microphone"}
      />
    </CentralPlayingMicrophoneContainer>
  );
};

export default CentralPlayingMicrophone;
