import { useParams } from "react-router-dom";
import currentWordPageAtom from "../../../Stores/Classroom/Word/currentWordPage";
import { useRecoilState } from "recoil";
import useData from "../../../Hooks/useData";

const WordImage = () => {
  const words = useData("words");
  const { level } = useParams();
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  return (
    <div
      className={`w-[76%] h-[76%] border-[24px] border-[#FFD53D] rounded-2xl flex flex-col justify-center items-center`}
    >
      <img
        src={`/assets/images/words/${level}-${words[currentWordPage - 1]}.png`}
        alt={words[currentWordPage - 1]}
      />
    </div>
  );
};

export default WordImage;
