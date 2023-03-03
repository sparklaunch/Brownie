import IdleMicrophone from "./IdleMicrophone";
import { useRecoilState } from "recoil";
import wordMicrophoneStateAtom from "../../../../Stores/Classroom/Word/wordMicrophoneState";
import currentWordPageAtom from "../../../../Stores/Classroom/Word/currentWordPage";
import { useEffect } from "react";
import CompletedMicrophone from "./CompletedMicrophone";
import wordScoresAtom from "../../../../Stores/Classroom/Word/wordScores";
import { useParams } from "react-router-dom";
import shouldAudioPlayAtom from "../../../../Stores/Classroom/shouldAudioPlay";

const Microphone = () => {
  const { level } = useParams();
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const [wordMicrophoneState, setWordMicrophoneState] = useRecoilState(
    wordMicrophoneStateAtom
  );
  const [wordScores, setWordScores] = useRecoilState(wordScoresAtom);
  const [shouldAudioPlay, setShouldAudioPlay] =
    useRecoilState(shouldAudioPlayAtom);
  useEffect(() => {
    if (wordScores[`${level}-${currentWordPage}`] !== undefined) {
      setWordMicrophoneState("completed");
    } else {
      setWordMicrophoneState("idle");
    }
  }, [currentWordPage]);
  useEffect(() => {
    switch (wordMicrophoneState) {
      case "idle":
        setShouldAudioPlay(true);
        break;
      case "recording":
        setShouldAudioPlay(false);
        break;
      case "loading":
        setShouldAudioPlay(false);
        break;
      case "completed":
        setShouldAudioPlay(true);
        break;
      default:
        setShouldAudioPlay(true);
        break;
    }
  }, [wordMicrophoneState]);
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
