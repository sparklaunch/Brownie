import { useRecoilState } from "recoil";
import totalScoreAtom from "../../../../Stores/Classroom/Story/totalScore";
import ExcellentScreen from "./ExcellentScreen/ExcellentScreen";
import GoodScreen from "./GoodScreen/GoodScreen";
import NiceTryScreen from "./NiceTryScreen/NiceTryScreen";
import { useEffect } from "react";
import resultsScreenShownAtom from "../../../../Stores/Classroom/Story/resultsScreenShown";
import leftMicrophoneStateAtom from "../../../../Stores/Classroom/Story/Microphones/leftMicrophoneState";
import leftPageCompletedAtom from "../../../../Stores/Classroom/Story/leftPageCompleted";
import rightMicrophoneStateAtom from "../../../../Stores/Classroom/Story/Microphones/rightMicrophoneState";
import rightFinishedRecordingAtom from "../../../../Stores/Classroom/Story/rightFinishedRecording";
import currentPageAtom from "../../../../Stores/Classroom/Story/currentPage";
import centralMicrophoneStateAtom from "../../../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import currentWordPageAtom from "../../../../Stores/Classroom/Word/currentWordPage";
import useData from "../../../../Hooks/useData";
import youDidItShownAtom from "../../../../Stores/Classroom/youDidItShown";

const ResultsScreen = () => {
  const [resultsScreenShown, setResultsScreenShown] = useRecoilState(
    resultsScreenShownAtom
  );
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [leftMicrophoneState, setLeftMicrophoneState] = useRecoilState(
    leftMicrophoneStateAtom
  );
  const [leftPageCompleted, setLeftPageCompleted] = useRecoilState(
    leftPageCompletedAtom
  );
  const [rightMicrophoneState, setRightMicrophoneState] = useRecoilState(
    rightMicrophoneStateAtom
  );
  const [rightFinishedRecording, setRightFinishedRecording] = useRecoilState(
    rightFinishedRecordingAtom
  );
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  const [youDidItShown, setYouDidItShown] = useRecoilState(youDidItShownAtom);
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const words = useData("words");
  const bookID = useData("id");
  useEffect(() => {
    new Audio(`/assets/audio/results_shown.mp3`).play();
    setTimeout(() => {
      setResultsScreenShown(false);
      setCentralMicrophoneState("completed");
      if (currentPage === 0) {
        setRightMicrophoneState("completed");
        if (rightFinishedRecording) {
          setRightMicrophoneState("completed");
        } else {
          setRightMicrophoneState("idle");
        }
      } else {
        setLeftPageCompleted(true);
        setLeftMicrophoneState("completed");
        if (rightFinishedRecording) {
          setRightMicrophoneState("completed");
        } else {
          setRightMicrophoneState("idle");
        }
      }
      if (currentPage === 10 || currentWordPage === words.length) {
        new Audio(`/assets/audio/you_did_it.mp3`).play();
        setYouDidItShown(true);
      }
    }, 3000);
  }, []);
  if (resultsScreenShown) {
    if (totalScore.score >= 70) {
      return <ExcellentScreen />;
    } else if (totalScore.score >= 40) {
      return <GoodScreen />;
    } else {
      return <NiceTryScreen />;
    }
  } else {
    return <></>;
  }
};

export default ResultsScreen;
