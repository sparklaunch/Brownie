import { useRecoilState } from "recoil";
import centralMicrophoneStateAtom from "../../../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import CentralIdleMicrophone from "./CentralIdleMicrophone";
import CentralDisabledMicrophone from "./CentralDisabledMicrophone";
import CentralInvisibleMicrophone from "./CentralInvisibleMicrophone";

const CentralMicrophone = () => {
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  switch (centralMicrophoneState) {
    case "idle":
      return <CentralIdleMicrophone />;
    case "disabled":
      return <CentralDisabledMicrophone />;
    case "invisible":
      return <CentralInvisibleMicrophone />;
    case "loading":
      return <></>;
    case "completed":
      return <></>;
  }
};

export default CentralMicrophone;
