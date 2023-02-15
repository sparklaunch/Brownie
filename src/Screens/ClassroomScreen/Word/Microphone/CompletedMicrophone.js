import currentWordPage from "../../../../Stores/Classroom/Word/currentWordPage";
import axios from "axios";
import uuid from "react-uuid";
import { useRecoilState } from "recoil";
import audioDurationAtom from "../../../../Stores/Classroom/audioDuration";
import wordMicrophoneStateAtom from "../../../../Stores/Classroom/Word/wordMicrophoneState";
import useData from "../../../../Hooks/useData";
import totalScoreAtom from "../../../../Stores/Classroom/Story/totalScore";
import wordResultsShownAtom from "../../../../Stores/Classroom/Word/wordResultsShown";

const CompletedMicrophone = () => {
  const [audioDuration, setAudioDuration] = useRecoilState(audioDurationAtom);
  const [wordMicrophoneState, setWordMicrophoneState] = useRecoilState(
    wordMicrophoneStateAtom
  );
  const words = useData("words");
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  const [wordResultsShown, setWordResultsShown] =
    useRecoilState(wordResultsShownAtom);
  const recordVoice = async () => {
    const device = await navigator.mediaDevices.getUserMedia({
      audio: true
    });
    setAudioDuration(2000);
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
          setWordResultsShown(true);
        })
        .catch((error) => {
          const stringError = JSON.stringify(error, null, 2);
          console.log(stringError);
        });
      const audio = new Audio(URL.createObjectURL(event.data));
      audio.play();
    };
    setTimeout(() => {
      recorder.stop();
      setWordMicrophoneState("disabled");
    }, 2000);
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