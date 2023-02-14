import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import currentPageAtom from "../../../../../Stores/Classroom/Story/currentPage";
import totalScoreAtom from "../../../../../Stores/Classroom/Story/totalScore";
import resultsScreenShownAtom from "../../../../../Stores/Classroom/Story/resultsScreenShown";
import audioDurationAtom from "../../../../../Stores/Classroom/audioDuration";
import data from "../../../../../data.json";
import leftMicrophoneStateAtom from "../../../../../Stores/Classroom/Story/Microphones/leftMicrophoneState";
import rightMicrophoneStateAtom from "../../../../../Stores/Classroom/Story/Microphones/rightMicrophoneState";
import axios from "axios";
import uuid from "react-uuid";
import rightPageCompletedAtom from "../../../../../Stores/Classroom/Story/rightPageCompleted";

const RightButtons = () => {
  const { level } = useParams();
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  const [resultsScreenShown, setResultsScreenShown] = useRecoilState(
    resultsScreenShownAtom
  );
  const [audioDuration, setAudioDuration] = useRecoilState(audioDurationAtom);
  const [rightPageCompleted, setRightPageCompleted] = useRecoilState(
    rightPageCompletedAtom
  );
  const stringData = JSON.stringify(data);
  const objectData = JSON.parse(stringData);
  const sentences = objectData.find((item) => {
    return item.level === level;
  }).sentences;
  const [leftMicrophoneState, setLeftMicrophoneState] = useRecoilState(
    leftMicrophoneStateAtom
  );
  const [rightMicrophoneState, setRightMicrophoneState] = useRecoilState(
    rightMicrophoneStateAtom
  );
  const recordVoice = async () => {
    const device = await navigator.mediaDevices.getUserMedia({
      audio: true
    });
    const recorder = new MediaRecorder(device);
    recorder.start();
    setRightMicrophoneState("recording");
    setTimeout(() => {
      recorder.stop();
      setRightMicrophoneState("disabled");
    }, audioDuration);
    recorder.ondataavailable = (event) => {
      const blob = new Blob([event.data], { type: "audio/wav" });
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64Record = reader.result;
        localStorage.setItem("right_record", base64Record);
      };
      const formData = new FormData();
      formData.append("text", sentences[currentPage]);
      formData.append("student_audio", event.data);
      axios
        .post(
          "https://proxy.cors.sh/https://api.elasolution.com/pron_v2/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "x-cors-api-key": "temp_e4ec220dbf44f09c113217921d9d34d6",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
              "X-API-KEY": "afef8c94d1094b58a3fc58e743eb9913"
            }
          }
        )
        .then((response) => {
          const stringResponse = JSON.stringify(response, null, 2);
          console.log(stringResponse);
          const totalScore = response.data.total_score;
          setTotalScore({
            score: totalScore,
            id: uuid()
          });
          setResultsScreenShown(true);
          setRightPageCompleted(true);
        })
        .catch((error) => {
          const stringError = JSON.stringify(error, null, 2);
          console.log(stringError);
        });
      const audio = new Audio(URL.createObjectURL(event.data));
      audio.play();
    };
  };
  const onClickRetry = () => {
    setRightPageCompleted(false);
    setRightMicrophoneState("disabled");
    const sound = new Audio("/assets/audio/microphone_on.wav");
    sound.play();
    recordVoice();
  };
  const onClickMyVoice = () => {
    const base64Record = localStorage.getItem("right_record");
    const audio = new Audio(base64Record);
    audio.play();
  };
  return (
    <div className={`absolute bottom-[-80px] right-[12vw]`}>
      <div className={`flex flex-row`}>
        <img
          src={`/assets/images/retry_button.svg`}
          alt={`Retry Button`}
          className={`mr-5 cursor-pointer w-[70px] h-[70px]`}
          onClick={onClickRetry}
        />
        <img
          src={`/assets/images/my_voice_button.svg`}
          alt={`My Voice Button`}
          className={`cursor-pointer w-[70px] h-[70px]`}
          onClick={onClickMyVoice}
        />
      </div>
    </div>
  );
};

export default RightButtons;
