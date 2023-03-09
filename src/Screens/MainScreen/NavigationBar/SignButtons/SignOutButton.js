import { Button } from "@mui/material";
import Constants from "../../../../Utilities/Constants";

const SignOutButton = () => {
  const onClickSignOut = () => {
    sessionStorage.removeItem("userNumber");
    sessionStorage.removeItem("studentName");
    window.location.reload(); // 페이지를 강제 새로고침합니다.
  };
  return (
    <Button
      variant={"contained"}
      onClick={onClickSignOut}
      sx={{
        backgroundColor: Constants.ACCENT_COLOR,
        fontFamily: "Jua",
        fontSize: 18,
        width: 104,
        height: 44,
        ":hover": {
          backgroundColor: Constants.ACCENT_COLOR
        }
      }}
    >
      로그아웃
    </Button>
  );
};

export default SignOutButton;
