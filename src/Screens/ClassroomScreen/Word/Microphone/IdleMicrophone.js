import styled from "styled-components";
import { useRecoilState } from "recoil";
import wordMicrophoneStateAtom from "../../../../Stores/Classroom/Word/wordMicrophoneState";
import axios from "axios";
import uuid from "react-uuid";
import data from "../../../../data.json";
import { useParams } from "react-router-dom";
import currentWordPage from "../../../../Stores/Classroom/Word/currentWordPage";
import totalScoreAtom from "../../../../Stores/Classroom/Story/totalScore";
import audioDurationAtom from "../../../../Stores/Classroom/audioDuration";
import wordResultsShownAtom from "../../../../Stores/Classroom/Word/wordResultsShown";

const IdleMicrophone = () => {
  const OuterCircle = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform: scale(1.2);
    background-color: #1ab9c5;
    animation: fadeOut 1.3s infinite;
    @keyframes fadeOut {
      0% {
        opacity: 0.3;
      }
      100% {
        opacity: 0;
      }
    }
  `;
  const InnerCircle = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform: scale(1.1);
    background-color: #1ab9c5;
    animation: fadeOut 1.3s infinite;
    @keyframes fadeOut {
      0% {
        opacity: 0.3;
      }
      100% {
        opacity: 0;
      }
    }
  `;
  const Wave = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform: scale(1);
    border: 5px solid #1ab9c5;
    animation: wave 1.3s infinite;
    @keyframes wave {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      100% {
        transform: scale(1.4);
        opacity: 0;
      }
    }
  `;
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  const [wordMicrophoneState, setWordMicrophoneState] = useRecoilState(
    wordMicrophoneStateAtom
  );
  const [wordResultsShown, setWordResultsShown] =
    useRecoilState(wordResultsShownAtom);
  const [audioDuration, setAudioDuration] = useRecoilState(audioDurationAtom);
  const { level } = useParams();
  const stringData = JSON.stringify(data);
  const jsonData = JSON.parse(stringData);
  const words = jsonData.find((item) => {
    return item.level === level;
  }).words;
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
  const onClickMicrophone = () => {
    const clickAudio = new Audio("/assets/audio/microphone_on.wav");
    clickAudio.play();
    recordVoice();
  };
  return (
    <div onClick={onClickMicrophone} className={`relative cursor-pointer`}>
      <div>
        <OuterCircle />
        <InnerCircle />
        <Wave />
      </div>
      <img
        src={`/assets/images/icons/microphone_idle.svg`}
        alt={"Microphone"}
      />
    </div>
  );
};

export default IdleMicrophone;
