import IdleMicrophone from "./IdleMicrophone";
import { useRecoilState } from "recoil";
import wordMicrophoneStateAtom from "../../../../Stores/Classroom/Word/wordMicrophoneState";
import RecordingMicrophone from "./RecordingMicrophone";
import DisabledMicrophone from "./DisabledMicrophone";
import currentWordPageAtom from "../../../../Stores/Classroom/Word/currentWordPage";
import { useEffect } from "react";

const Microphone = () => {
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const [wordMicrophoneState, setWordMicrophoneState] = useRecoilState(
    wordMicrophoneStateAtom
  );
  useEffect(() => {
    setWordMicrophoneState("idle");
  }, [currentWordPage]);
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
