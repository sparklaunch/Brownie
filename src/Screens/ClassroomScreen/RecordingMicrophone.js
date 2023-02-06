import audioDurationAtom from "../../Stores/Classroom/audioDuration";
import { useRecoilState } from "recoil";

const RecordingMicrophone = () => {
  const [audioDuration, setAudioDuration] = useRecoilState(audioDurationAtom);
  return <div></div>;
};

export default RecordingMicrophone;
