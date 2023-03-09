import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
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
import Constants from "../../../../Utilities/Constants";
import { Howl } from "howler";
import scoresAtom from "../../../../Stores/Classroom/Story/scores";
import { useParams } from "react-router-dom";
import modeAtom from "../../../../Stores/Classroom/mode";

const ResultsScreen = () => {
  const { level } = useParams();
  const mode = useRecoilValue(modeAtom);
  const [resultsScreenShown, setResultsScreenShown] = useRecoilState(
    resultsScreenShownAtom
  );
  const currentPage = useRecoilValue(currentPageAtom);
  const setLeftMicrophoneState = useSetRecoilState(leftMicrophoneStateAtom);
  const setLeftPageCompleted = useSetRecoilState(leftPageCompletedAtom);
  const setRightMicrophoneState = useSetRecoilState(rightMicrophoneStateAtom);
  const rightFinishedRecording = useRecoilValue(rightFinishedRecordingAtom);
  const totalScore = useRecoilValue(totalScoreAtom);
  const setCentralMicrophoneState = useSetRecoilState(
    centralMicrophoneStateAtom
  );
  const setYouDidItShown = useSetRecoilState(youDidItShownAtom);
  const currentWordPage = useRecoilValue(currentWordPageAtom);
  const scores = useRecoilValue(scoresAtom);
  const words = useData("words");
  const rightScoreExists = scores[`${level}-${currentPage + 1}`] !== undefined; // 오른쪽 페이지의 점수가 존재한다면, 즉, 오른쪽 페이지를 완료했다면,
  useEffect(() => {
    setCentralMicrophoneState("resultsShowing");
    if (rightScoreExists) {
      setCentralMicrophoneState("completed");
    }
    const resultsShownAudio = new Howl({
      src: [`/assets/audio/results_shown.mp3`]
    });
    resultsShownAudio.play(); // 결과 화면 음원을 재생합니다.
    setTimeout(() => {
      setResultsScreenShown(false);
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
        // 스토리 모드의 10페이지 (마지막 페이지)가 완료되었거나, 단어 학습이 완료되었다면,
        const youDidItAudio = new Howl({
          src: [`/assets/audio/you_did_it.mp3`]
        });
        youDidItAudio.play();
        setYouDidItShown(true);
      }
    }, 3000); // 3초 후에 결과 화면을 닫습니다.
  }, []);
  if (resultsScreenShown) {
    switch (mode) {
      case "story":
        if (totalScore.score >= Constants.EXCELLENT_THRESHOLD) {
          return <ExcellentScreen />;
        } else if (totalScore.score >= Constants.GOOD_THRESHOLD) {
          return <GoodScreen />;
        } else {
          return <NiceTryScreen />;
        }
      case "word":
        if (totalScore.score >= Constants.WORD_EXCELLENT_THRESHOLD) {
          return <ExcellentScreen />;
        } else if (totalScore.score >= Constants.WORD_GOOD_THRESHOLD) {
          return <GoodScreen />;
        } else {
          return <NiceTryScreen />;
        }
    }
  } else {
    return <></>;
  }
};

export default ResultsScreen;
