import IdleMicrophone from "./IdleMicrophone";
import { useRecoilState } from "recoil";
import wordMicrophoneStateAtom from "../../../../Stores/Classroom/Word/wordMicrophoneState";
import RecordingMicrophone from "./RecordingMicrophone";

const Microphone = () => {
  const [wordMicrophoneState, setWordMicrophoneState] = useRecoilState(
    wordMicrophoneStateAtom
  );
  switch (wordMicrophoneState) {
    case "idle":
      return <IdleMicrophone />;
    case "recording":
      return <RecordingMicrophone />;
  }
};

export default Microphone;
