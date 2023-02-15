import { useRecoilState } from "recoil";
import totalScoreAtom from "../../../../Stores/Classroom/Story/totalScore";
import ExcellentBar from "./ExcellentBar";
import GoodBar from "./GoodBar";
import NiceTryBar from "./NiceTryBar";
import { useEffect } from "react";
import wordMicrophoneStateAtom from "../../../../Stores/Classroom/Word/wordMicrophoneState";

const WordResults = () => {
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  const [wordMicrophoneState, setWordMicrophoneState] = useRecoilState(
    wordMicrophoneStateAtom
  );
  useEffect(() => {
    new Audio("/assets/audio/results_shown.mp3").play();
    setWordMicrophoneState("completed");
  }, []);
  if (totalScore.score >= 50) {
    return (
      <div className={`absolute top-0 left-[50%] translate-x-[-50%]`}>
        <ExcellentBar />
      </div>
    );
  } else if (totalScore.score >= 20) {
    return (
      <div className={`absolute top-0 left-[50%] translate-x-[-50%]`}>
        <GoodBar />
      </div>
    );
  } else {
    return (
      <div className={`absolute top-0 left-[50%] translate-x-[-50%]`}>
        <NiceTryBar />
      </div>
    );
  }
};

export default WordResults;
