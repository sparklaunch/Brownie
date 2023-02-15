import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";
import { useEffect } from "react";
import axios from "axios";
import { useSpeechSynthesis } from "react-speech-kit";
import modeAtom from "../../../Stores/Classroom/mode";
import useData from "../../../Hooks/useData";

const Word = () => {
  const { speak } = useSpeechSynthesis();
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const [mode, setMode] = useRecoilState(modeAtom);
  const words = useData("words");
  const requireTTS = async () => {
    try {
      const response = await axios.post(
        "https://proxy.cors.sh/https://api.elasolution.com/tts/",
        {
          text: words[currentWordPage - 1]
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-cors-api-key": "temp_e4ec220dbf44f09c113217921d9d34d6",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "X-API-KEY": "afef8c94d1094b58a3fc58e743eb9913"
          }
        }
      );
      const audioData = response.data;
      const buffer = new ArrayBuffer(audioData.length);
      const view = new Uint8Array(buffer);
      for (let i = 0; i < audioData.length; i++) {
        view[i] = audioData.charCodeAt(i) & (0xff00 >> 8);
      }
      const blob = new Blob([view], { type: "audio/wav" });
      const audioURL = URL.createObjectURL(blob);
      const audio = new Audio(audioURL);
      audio.play();
    } catch (error) {
      const errorString = JSON.stringify(error, null, 2);
      console.log(errorString);
    }
  };
  const speakWord = () => {
    speak({
      text: words[currentWordPage - 1]
    });
  };
  useEffect(() => {
    requireTTS();
  }, [currentWordPage, mode]);
  return (
    <div className={`h-full flex flex-row justify-center items-center`}>
      <img
        src={"/assets/images/icons/megaphone_button.svg"}
        alt={"Megaphone"}
        className={`cursor-pointer`}
        onClick={requireTTS}
      />
      <p className={`text-[120px] font-[900] ml-[24px]`}>
        {words[currentWordPage - 1]}
      </p>
    </div>
  );
};

export default Word;
