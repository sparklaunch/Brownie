import { useRecoilState } from "recoil";
import centralMicrophoneStateAtom from "../../../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import CentralIdleMicrophone from "./CentralIdleMicrophone";

const CentralMicrophone = () => {
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  switch (centralMicrophoneState) {
    case "idle":
      return <CentralIdleMicrophone />;
  }
};

export default CentralMicrophone;
