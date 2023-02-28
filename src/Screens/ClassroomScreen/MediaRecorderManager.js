import { useRecoilState } from "recoil";
import mediaRecorderAtom from "../../Stores/Misc/mediaRecorder";
import { useEffect } from "react";

const MediaRecorderManager = () => {
  const [mediaRecorder, setMediaRecorder] = useRecoilState(mediaRecorderAtom);
  const getMediaRecorder = async () => {
    const device = await navigator.mediaDevices.getUserMedia({
      audio: true
    });
    const mediaRecorder = new MediaRecorder(device);
    setMediaRecorder(mediaRecorder);
  };
  useEffect(() => {
    getMediaRecorder();
  }, []);
  return <></>;
};

export default MediaRecorderManager;
