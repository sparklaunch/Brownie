import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import currentPageAtom from "../../Stores/Classroom/Story/currentPage";
import modeAtom from "../../Stores/Classroom/mode";
import { Howler } from "howler";
import currentWordPageAtom from "../../Stores/Classroom/Word/currentWordPage";

const HomeButton = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [currentWordPage, setCurrentWordPage] =
    useRecoilState(currentWordPageAtom);
  const [mode, setMode] = useRecoilState(modeAtom);
  const onClickHome = () => {
    Howler.unload();
    setMode("story");
    setCurrentPage(0);
    setCurrentWordPage(1);
    navigate("/");
  };
  return (
    <div className={`cursor-pointer`} onClick={onClickHome}>
      <img src={"/assets/images/icons/home_button.svg"} alt={"Home Button"} />
    </div>
  );
};

export default HomeButton;
