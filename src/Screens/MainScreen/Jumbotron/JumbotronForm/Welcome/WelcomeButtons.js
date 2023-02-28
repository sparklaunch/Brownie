import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const WelcomeButtons = () => {
  const navigate = useNavigate();
  const onClickLogOutButton = () => {
    sessionStorage.removeItem("userNumber");
    window.location.reload();
  };
  return (
    <>
      <Button
        variant={"contained"}
        size={"large"}
        sx={{
          backgroundColor: "#1AB9C5",
          width: "100%",
          fontSize: 18,
          marginBottom: "10px",
          "&:hover": {
            backgroundColor: "#1AB9C5"
          }
        }}
        onClick={() => navigate("/mypage")}
      >
        마이페이지
      </Button>
      <Button
        variant={"contained"}
        size={"large"}
        sx={{
          backgroundColor: "#1AC573",
          width: "100%",
          fontSize: 18,
          "&:hover": {
            backgroundColor: "#1AC573"
          }
        }}
        onClick={onClickLogOutButton}
      >
        로그아웃
      </Button>
    </>
  );
};

export default WelcomeButtons;
