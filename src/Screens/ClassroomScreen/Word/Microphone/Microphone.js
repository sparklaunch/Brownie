import IdleMicrophone from "./IdleMicrophone";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import wordMicrophoneStateAtom from "../../../../Stores/Classroom/Word/wordMicrophoneState";
import currentWordPageAtom from "../../../../Stores/Classroom/Word/currentWordPage";
import { useEffect } from "react";
import CompletedMicrophone from "./CompletedMicrophone";
import wordScoresAtom from "../../../../Stores/Classroom/Word/wordScores";
import { useParams } from "react-router-dom";
import shouldAudioPlayAtom from "../../../../Stores/Classroom/shouldAudioPlay";

const Microphone = () => {
  const { level } = useParams();
  const currentWordPage = useRecoilValue(currentWordPageAtom);
  const [wordMicrophoneState, setWordMicrophoneState] = useRecoilState(
    wordMicrophoneStateAtom
  );
  const wordScores = useRecoilValue(wordScoresAtom);
  const setShouldAudioPlay = useSetRecoilState(shouldAudioPlayAtom);
  useEffect(() => {
    if (wordScores[`${level}-${currentWordPage}`] !== undefined) {
      // 점수가 있으면
      setWordMicrophoneState("completed");
    } else {
      // 점수가 없으면
      setWordMicrophoneState("idle");
    }
  }, [currentWordPage]); // 페이지가 바뀔 때마다 마이크 상태를 바꿔줍니다.
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
