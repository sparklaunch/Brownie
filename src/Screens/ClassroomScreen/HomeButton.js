import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import currentPageAtom from "../../Stores/Classroom/Story/currentPage";
import modeAtom from "../../Stores/Classroom/mode";
import { Howler } from "howler";

const HomeButton = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [mode, setMode] = useRecoilState(modeAtom);
  const onClickHome = () => {
    Howler.unload();
    setMode("story");
    setCurrentPage(0);
    navigate("/");
  };
  return (
    <div
      className={`absolute top-[4vw] right-[3vw] cursor-pointer`}
      onClick={onClickHome}
    >
      <img src={"/assets/images/icons/home_button.svg"} alt={"Home Button"} />
    </div>
  );
};

export default HomeButton;
