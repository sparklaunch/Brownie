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
import leftRetryAtom from "../../Stores/Classroom/Story/leftRetry";

const AudioManager = () => {
  const [leftMicrophoneState, setLeftMicrophoneState] = useRecoilState(
    leftMicrophoneStateAtom
  );
  const [rightMicrophoneState, setRightMicrophoneState] = useRecoilState(
    rightMicrophoneStateAtom
  );
  const [audioDuration, setAudioDuration] = useRecoilState(audioDurationAtom);
  const onLeftPlay = () => {
    setLeftMicrophoneState("disabled");
    setRightMicrophoneState("disabled");
  };
  const onLeftEnd = () => {
    setLeftMicrophoneState("idle");
    setRightMicrophoneState("idle");
  };
  const onRightPlay = () => {
    setLeftMicrophoneState("disabled");
    setRightMicrophoneState("disabled");
  };
  const onRightEnd = () => {
    setLeftMicrophoneState("completed");
    setRightMicrophoneState("idle");
  };
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [mode, setMode] = useRecoilState(modeAtom);
  const [leftPageCompleted, setLeftPageCompleted] = useRecoilState(
    leftPageCompletedAtom
  );
  const [leftRetry, setLeftRetry] = useRecoilState(leftRetryAtom);
  const [resultsScreenShown, setResultsScreenShown] = useRecoilState(
    resultsScreenShownAtom
  );
  useEffect(() => {
    setResultsScreenShown(false);
    setLeftPageCompleted(false);
    Howler.unload();
    if (mode === "story") {
      const howler = new Howl({
        src: [`/assets/audio/pages/1-1-${currentPage}.mp3`],
        onload: () => {
          setAudioDuration(howler.duration() * 1000);
        },
        onplay: onLeftPlay,
        onend: onLeftEnd
      });
      howler.play();
    }
  }, [currentPage, mode]);
  useEffect(() => {
    if (leftPageCompleted && !leftRetry) {
      const howler = new Howl({
        src: [`/assets/audio/pages/1-1-${currentPage + 1}.mp3`],
        onload: () => {
          setAudioDuration(howler.duration() * 1000);
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
