import { useRecoilState } from "recoil";
import currentPageAtom from "../../Stores/Classroom/currentPage";
import microphoneStateAtom from "../../Stores/Classroom/microphoneState";
import { useEffect } from "react";
import { Howl, Howler } from "howler";
import audioDurationAtom from "../../Stores/Classroom/audioDuration";

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
  useEffect(() => {
    Howler.unload();
    const howler = new Howl({
      src: [`/assets/audio/pages/1-1-${currentPage}.mp3`],
      onload: () => {
        setAudioDuration(howler.duration() * 1000);
      },
      onplay: onPlay,
      onend: onEnd
    });
    howler.play();
  }, [currentPage]);
  return <></>;
};

export default AudioManager;
