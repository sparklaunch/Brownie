import { Button } from "@mui/material";

const SignOutButton = () => {
  const onClickSignOut = () => {
    sessionStorage.removeItem("userNumber");
    sessionStorage.removeItem("studentName");
    window.location.reload();
  };
  return (
    <Button
      variant={"contained"}
      onClick={onClickSignOut}
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
