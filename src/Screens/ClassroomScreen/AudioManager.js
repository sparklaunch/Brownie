import { useRecoilState } from "recoil";
import currentPageAtom from "../../Stores/Classroom/Story/currentPage";
import microphoneStateAtom from "../../Stores/Classroom/Story/microphoneState";
import { useEffect } from "react";
import { Howl, Howler } from "howler";
import audioDurationAtom from "../../Stores/Classroom/audioDuration";
import modeAtom from "../../Stores/Classroom/mode";
import resultsScreenShownAtom from "../../Stores/Classroom/Story/resultsScreenShown";
import leftPageCompletedAtom from "../../Stores/Classroom/Story/leftPageCompleted";

const AudioManager = () => {
  const [microphoneState, setMicrophoneState] =
    useRecoilState(microphoneStateAtom);
  const [audioDuration, setAudioDuration] = useRecoilState(audioDurationAtom);
  const onPlay = () => {
    setMicrophoneState("disabled");
  };
  const onEnd = () => {
    setMicrophoneState("idle");
  };
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [mode, setMode] = useRecoilState(modeAtom);
  const [leftPageCompleted, setLeftPageCompleted] = useRecoilState(
    leftPageCompletedAtom
  );
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
        onplay: onPlay,
        onend: onEnd
      });
      howler.play();
    }
  }, [currentPage, mode]);
  return <></>;
};

export default AudioManager;
