import { useRecoilState } from "recoil";
import centralMicrophoneStateAtom from "../../../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import CentralIdleMicrophone from "./CentralIdleMicrophone";
import CentralDisabledMicrophone from "./CentralDisabledMicrophone";

const CentralMicrophone = () => {
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  switch (centralMicrophoneState) {
    case "idle":
      return <CentralIdleMicrophone />;
    case "disabled":
      return <CentralDisabledMicrophone />;
  }
};

export default CentralMicrophone;
