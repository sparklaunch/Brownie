import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import currentPageAtom from "../../Stores/Classroom/currentPage";
import modeAtom from "../../Stores/Classroom/mode";

const HomeButton = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [mode, setMode] = useRecoilState(modeAtom);
  const onClickHome = () => {
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
