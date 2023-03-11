import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Constants from "../../../../../Utilities/Constants";

const WelcomeButtons = () => {
  const navigate = useNavigate();
  const onClickLogOutButton = () => {
    sessionStorage.removeItem("userNumber");
    sessionStorage.removeItem("studentName");
    window.location.reload(); // 페이지를 강제 새로고침합니다.
  };
  return (
    <>
      <Button
        variant={"contained"}
        size={"large"}
        sx={{
          backgroundColor: Constants.ACCENT_COLOR,
          width: "100%",
          fontSize: 18,
          marginBottom: "10px",
          "&:hover": {
            backgroundColor: Constants.ACCENT_COLOR
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
          backgroundColor: Constants.NEON,
          width: "100%",
          fontSize: 18,
          "&:hover": {
            backgroundColor: Constants.NEON
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
