import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
        backgroundColor: "#1AB9C5",
        fontFamily: "Jua",
        fontSize: 18,
        width: 104,
        height: 44,
        ":hover": {
          backgroundColor: "#1AB9C5"
        }
      }}
    >
      로그아웃
    </Button>
  );
};

export default SignOutButton;
