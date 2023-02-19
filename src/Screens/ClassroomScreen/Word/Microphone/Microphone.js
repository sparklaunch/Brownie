import IdleMicrophone from "./IdleMicrophone";
import { useRecoilState } from "recoil";
import wordMicrophoneStateAtom from "../../../../Stores/Classroom/Word/wordMicrophoneState";
import currentWordPageAtom from "../../../../Stores/Classroom/Word/currentWordPage";
import { useEffect } from "react";
import CompletedMicrophone from "./CompletedMicrophone";

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
      return <></>;
    case "loading":
      return <></>;
    case "completed":
      return <CompletedMicrophone />;
  }
};

export default Microphone;
