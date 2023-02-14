import { useRecoilState } from "recoil";
import tabValueAtom from "../../../../Stores/Auth/tabValue";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const SignOutButton = () => {
  const [tabValue, setTabValue] = useRecoilState(tabValueAtom);
  const navigate = useNavigate();
  const onClickSignIn = () => {
    setTabValue(0);
    navigate("/signin");
  };
  return (
    <Button
      variant={"contained"}
      onClick={onClickSignIn}
      sx={{
        backgroundColor: "#1AB9C5",
        filter: "brightness(1.0)",
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
