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
        "https://proxy.cors.sh/http://3.38.222.142/tts/",
        {
          words: words
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
      const length = response.data.length;
      const buffer = new ArrayBuffer(length);
      const view = new Uint8Array(buffer);
      for (let i = 0; i < length; i++) {
        view[i] = response.data.charCodeAt(i) & 0xff;
      }
      const blob = new Blob([view], { type: "audio/x-wav" });
      const url = URL.createObjectURL(blob);
      const sound = new Audio(url);
      sound.play();
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
    speakWord();
  }, [currentWordPage, mode]);
  return (
    <div className={`h-full flex flex-row justify-center items-center`}>
      <img
        src={"/assets/images/icons/megaphone_button.svg"}
        alt={"Megaphone"}
        className={`cursor-pointer`}
        onClick={speakWord}
      />
      <p className={`text-[120px] font-[900] ml-[24px]`}>
        {words[currentWordPage - 1]}
      </p>
    </div>
  );
};

export default Word;
