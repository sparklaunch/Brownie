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
      return (
        <div
          className={`absolute left-[50%] translate-x-[-50%] bottom-[-100px]`}
        >
          <IdleMicrophone />
        </div>
      );
    case "recording":
      return <></>;
    case "loading":
      return <></>;
    case "completed":
      return (
        <div
          className={`absolute left-[50%] translate-x-[-50%] bottom-[-100px]`}
        >
          <CompletedMicrophone />
        </div>
      );
  }
};

export default Microphone;
