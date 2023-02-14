import { useParams } from "react-router-dom";
import data from "../../../data.json";
import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";
import { useEffect } from "react";
import axios from "axios";

const Word = () => {
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const { level } = useParams();
  const dataString = JSON.stringify(data);
  const dataObject = JSON.parse(dataString);
  const words = dataObject.find((book) => book.level === level).words;
  const requireTTS = async () => {
    const formData = new FormData();
    formData.append("text", words[currentWordPage - 1]);
    try {
      const response = await axios.post(
        "https://proxy.cors.sh/https://api.elasolution.com/tts/",
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
      );
      const audioData = response.data;
      console.log(audioData);
      // base64 to wav.
      const base64Data = audioData.replace(/^data:audio\/wav;base64,/, "");
    } catch (error) {
      const errorString = JSON.stringify(error, null, 2);
      console.log(errorString);
    }
  };
  useEffect(() => {
    requireTTS();
  }, [currentWordPage]);
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
