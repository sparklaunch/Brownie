import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import currentPageAtom from "../../Stores/Classroom/Story/currentPage";
import modeAtom from "../../Stores/Classroom/mode";
import { Howler } from "howler";
import currentWordPageAtom from "../../Stores/Classroom/Word/currentWordPage";
import { HomeButtonContainer, HomeButtonImage } from "./HomeButtonStyles";

const HomeButton = () => {
  const navigate = useNavigate();
  const setCurrentPage = useSetRecoilState(currentPageAtom);
  const setCurrentWordPage = useSetRecoilState(currentWordPageAtom);
  const setMode = useSetRecoilState(modeAtom);
  const onClickHome = () => {
    Howler.unload();
    setMode("word");
    setCurrentPage(0);
    setCurrentWordPage(1);
    navigate("/");
  };
  return (
    <HomeButtonContainer onClick={onClickHome}>
      <HomeButtonImage
        src={"/assets/images/icons/home_button.svg"}
        alt={"Home Button"}
      />
    </HomeButtonContainer>
  );
};

export default HomeButton;
