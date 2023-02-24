import { useRecoilState } from "recoil";
import centralMicrophoneStateAtom from "../../../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import CentralIdleMicrophone from "./CentralIdleMicrophone";
import CentralInvisibleMicrophone from "./CentralInvisibleMicrophone";
import CentralPlayingMicrophone from "./CentralPlayingMicrophone";

const CentralMicrophone = () => {
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  switch (centralMicrophoneState) {
    case "idle":
      return <CentralIdleMicrophone />;
    case "disabled":
      return <CentralPlayingMicrophone />;
    case "invisible":
      return <CentralInvisibleMicrophone />;
    case "loading":
      return <></>;
    case "completed":
      return <></>;
  }
};

export default CentralMicrophone;
