import { useSetRecoilState } from "recoil";
import mediaRecorderAtom from "../../Stores/Misc/mediaRecorder";
import { useEffect } from "react";

const MediaRecorderManager = () => {
  const setMediaRecorder = useSetRecoilState(mediaRecorderAtom);
  const getMediaRecorder = async () => {
    // 미디어 레코더를 가져옵니다.
    const device = await navigator.mediaDevices.getUserMedia({
      audio: true
    }); // 오디오를 가져옵니다.
    const mediaRecorder = new MediaRecorder(device); // 미디어 레코더를 만듭니다.
    setMediaRecorder(mediaRecorder); // 미디어 레코더를 저장합니다.
  };
  useEffect(() => {
    (async () => {
      await getMediaRecorder();
    })(); // 미디어 레코더를 가져옵니다.
  }, []);
  return <></>;
};

export default MediaRecorderManager;
