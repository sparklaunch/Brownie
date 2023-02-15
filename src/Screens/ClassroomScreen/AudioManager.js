import { useRecoilState } from "recoil";
import currentPageAtom from "../../Stores/Classroom/Story/currentPage";
import { useEffect } from "react";
import { Howl, Howler } from "howler";
import audioDurationAtom from "../../Stores/Classroom/audioDuration";
import modeAtom from "../../Stores/Classroom/mode";
import resultsScreenShownAtom from "../../Stores/Classroom/Story/resultsScreenShown";
import leftPageCompletedAtom from "../../Stores/Classroom/Story/leftPageCompleted";
import leftMicrophoneStateAtom from "../../Stores/Classroom/Story/Microphones/leftMicrophoneState";
import rightMicrophoneStateAtom from "../../Stores/Classroom/Story/Microphones/rightMicrophoneState";
import leftFinishedAtom from "../../Stores/Classroom/Story/leftFinished";
import rightFinishedRecordingAtom from "../../Stores/Classroom/Story/rightFinishedRecording";
import rightPagePlayingAtom from "../../Stores/Classroom/Story/rightPagePlaying";
import leftPagePlayingAtom from "../../Stores/Classroom/Story/leftPagePlaying";
import currentWordPageAtom from "../../Stores/Classroom/Word/currentWordPage";
import { useParams } from "react-router-dom";
import useData from "../../Hooks/useData";
import centralMicrophoneStateAtom from "../../Stores/Classroom/Story/Microphones/centralMicrophoneState";
import highlightedPageAtom from "../../Stores/Classroom/Story/highlightedPage";

const AudioManager = () => {
  const { level } = useParams();
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const words = useData(`words`);
  const [leftMicrophoneState, setLeftMicrophoneState] = useRecoilState(
    leftMicrophoneStateAtom
  );
  const [rightMicrophoneState, setRightMicrophoneState] = useRecoilState(
    rightMicrophoneStateAtom
  );
  const [leftFinished, setLeftFinished] = useRecoilState(leftFinishedAtom);
  const [audioDuration, setAudioDuration] = useRecoilState(audioDurationAtom);
  const onFirstPagePlay = () => {
    setRightMicrophoneState("disabled");
    setCentralMicrophoneState("disabled");
    setHighlightedPage(1);
  };
  const onFirstPageEnd = () => {
    setRightMicrophoneState("idle");
    setCentralMicrophoneState("idle");
  };
  const onLeftPlay = () => {
    setHighlightedPage(currentPage);
    setLeftMicrophoneState("disabled");
    setRightMicrophoneState("disabled");
    setCentralMicrophoneState("disabled");
  };
  const onLeftEnd = () => {
    setLeftMicrophoneState("idle");
    setRightMicrophoneState("idle");
    setCentralMicrophoneState("idle");
  };
  const onRightPlay = () => {
    setHighlightedPage(currentPage + 1);
    setLeftMicrophoneState("disabled");
    setRightMicrophoneState("disabled");
    setCentralMicrophoneState("disabled");
  };
  const onRightEnd = () => {
    setLeftMicrophoneState("completed");
    setRightMicrophoneState("idle");
    setCentralMicrophoneState("idle");
  };
  const onWordPlay = () => {};
  const onWordEnd = () => {};
  const [rightFinishedRecording, setRightFinishedRecording] = useRecoilState(
    rightFinishedRecordingAtom
  );
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [mode, setMode] = useRecoilState(modeAtom);
  const [leftPageCompleted, setLeftPageCompleted] = useRecoilState(
    leftPageCompletedAtom
  );
  const [leftPagePlaying, setLeftPagePlaying] =
    useRecoilState(leftPagePlayingAtom);
  const [rightPagePlaying, setRightPagePlaying] =
    useRecoilState(rightPagePlayingAtom);
  const [resultsScreenShown, setResultsScreenShown] = useRecoilState(
    resultsScreenShownAtom
  );
  const [centralMicrophoneState, setCentralMicrophoneState] = useRecoilState(
    centralMicrophoneStateAtom
  );
  const [highlightedPage, setHighlightedPage] =
    useRecoilState(highlightedPageAtom);
  useEffect(() => {
    setResultsScreenShown(false);
    setLeftPageCompleted(false);
    setLeftFinished(false);
    setRightFinishedRecording(false);
    setLeftPagePlaying(false);
    setRightPagePlaying(false);
    Howler.unload();
    if (mode === "story") {
      if (currentPage === 0) {
        const howler = new Howl({
          src: [`/assets/audio/pages/${level}-1.mp3`],
          onload: () => {
            setAudioDuration(howler.duration() * 1000 + 2000);
          },
          onplay: onFirstPagePlay,
          onend: onFirstPageEnd
        });
        howler.play();
      } else {
        const howler = new Howl({
          src: [`/assets/audio/pages/${level}-${currentPage}.mp3`],
          onload: () => {
            setAudioDuration(howler.duration() * 1000 + 2000);
          },
          onplay: onLeftPlay,
          onend: onLeftEnd
        });
        howler.play();
      }
    } else {
      const howler = new Howl({
        src: [`/assets/audio/words/${words[currentWordPage - 1]}.wav`],
        onload: () => {
          setAudioDuration(howler.duration() * 1000 + 2000);
        },
        onplay: onWordPlay,
        onend: onWordEnd
      });
      howler.play();
    }
  }, [currentPage, currentWordPage, mode]);
  useEffect(() => {
    if (leftPageCompleted && !leftFinished) {
      const howler = new Howl({
        src: [`/assets/audio/pages/${level}-${currentPage + 1}.mp3`],
        onload: () => {
          setAudioDuration(howler.duration() * 1000 + 2000);
        },
        onplay: onRightPlay,
        onend: onRightEnd
      });
      howler.play();
    }
  }, [leftPageCompleted]);
  return <></>;
};

export default AudioManager;
