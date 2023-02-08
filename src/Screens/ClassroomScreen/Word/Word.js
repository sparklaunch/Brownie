import { useParams } from "react-router-dom";
import data from "../../../data.json";
import { useRecoilState } from "recoil";
import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";

const Word = () => {
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const { level } = useParams();
  const dataString = JSON.stringify(data);
  const dataObject = JSON.parse(dataString);
  const words = dataObject.find((book) => book.level === level).words;
  return (
    <div className={`h-full flex flex-row justify-center items-center`}>
      <img
        src={"/assets/images/icons/megaphone_button.svg"}
        alt={"Megaphone"}
        className={`cursor-pointer`}
      />
      <p className={`text-[120px] font-[900] ml-[24px]`}>
        {words[currentWordPage - 1]}
      </p>
    </div>
  );
};

export default Word;
