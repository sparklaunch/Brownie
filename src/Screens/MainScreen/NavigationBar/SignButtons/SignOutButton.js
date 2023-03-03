import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Constants from "../../../../Utilities/Constants";

const SignOutButton = () => {
  const navigate = useNavigate();
  const onClickSignOut = () => {
    sessionStorage.removeItem("userNumber");
    sessionStorage.removeItem("studentName");
    navigate("/");
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
