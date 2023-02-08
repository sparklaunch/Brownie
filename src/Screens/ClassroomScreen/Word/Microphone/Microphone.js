import IdleMicrophone from "./IdleMicrophone";
import { useRecoilState } from "recoil";
import wordMicrophoneStateAtom from "../../../../Stores/Classroom/Word/wordMicrophoneState";
import RecordingMicrophone from "./RecordingMicrophone";
import DisabledMicrophone from "./DisabledMicrophone";

const Microphone = () => {
  const [wordMicrophoneState, setWordMicrophoneState] = useRecoilState(
    wordMicrophoneStateAtom
  );
  switch (wordMicrophoneState) {
    case "idle":
      return <IdleMicrophone />;
    case "recording":
      return <RecordingMicrophone />;
    case "disabled":
      return <DisabledMicrophone />;
  }
};

export default Microphone;
