import currentWordPage from "../../../../Stores/Classroom/Word/currentWordPage";
import axios from "axios";
import uuid from "react-uuid";
import { useRecoilState } from "recoil";
import audioDurationAtom from "../../../../Stores/Classroom/audioDuration";
import wordMicrophoneStateAtom from "../../../../Stores/Classroom/Word/wordMicrophoneState";
import useData from "../../../../Hooks/useData";
import totalScoreAtom from "../../../../Stores/Classroom/Story/totalScore";
import wordResultsShownAtom from "../../../../Stores/Classroom/Word/wordResultsShown";
import resultsScreenShownAtom from "../../../../Stores/Classroom/Story/resultsScreenShown";

const CompletedMicrophone = () => {
  const [audioDuration, setAudioDuration] = useRecoilState(audioDurationAtom);
  const [wordMicrophoneState, setWordMicrophoneState] = useRecoilState(
    wordMicrophoneStateAtom
  );
  const [resultsScreenShown, setResultsScreenShown] = useRecoilState(
    resultsScreenShownAtom
  );
  const words = useData("words");
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  const [wordResultsShown, setWordResultsShown] =
    useRecoilState(wordResultsShownAtom);
  const recordVoice = async () => {
    try {
      const device = await navigator.mediaDevices.getUserMedia({
        audio: true
      });
      const microphoneOn = new Audio(`/assets/audio/microphone_on.wav`);
      microphoneOn.play();
      const recorder = new MediaRecorder(device);
      recorder.start();
      setWordMicrophoneState("recording");
      recorder.ondataavailable = (event) => {
        const blob = new Blob([event.data], { type: "audio/wav" });
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64Record = reader.result;
          localStorage.setItem("record", base64Record);
        };
        const formData = new FormData();
        formData.append("text", words[currentWordPage - 1]);
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
                "Access-Control-Allow-Methods":
                  "GET, POST, PUT, DELETE, OPTIONS",
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
            const userRecord = localStorage.getItem("record");
            const audio = new Audio(userRecord);
            audio.play();
            setResultsScreenShown(true);
            setWordResultsShown(true);
            setWordMicrophoneState("completed");
          })
          .catch((error) => {
            const stringError = JSON.stringify(error, null, 2);
            console.log(stringError);
          });
      };
      setTimeout(() => {
        recorder.stop();
        setWordMicrophoneState("loading");
      }, audioDuration);
    } catch (error) {
      switch (error.message) {
        case "Requested device not found":
          alert("마이크를 찾을 수 없습니다.");
          break;
        case "Permission denied":
          alert("마이크 사용을 허용해주세요.");
          break;
        default:
          alert("마이크 사용에 문제가 발생했습니다.");
          break;
      }
    }
  };
  const onClickRetry = () => {
    recordVoice();
  };
  const onClickMyVoice = () => {
    const myVoice = localStorage.getItem("record");
    const audio = new Audio(myVoice);
    audio.play();
  };
  return (
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
  );
};

export default CompletedMicrophone;
