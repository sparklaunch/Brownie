import { Button, TextField } from "@mui/material";

const FormFields = () => {
  return (
    <div>
      <TextField
        id={"id"}
        variant={"filled"}
        label={"아이디"}
        size={"small"}
        sx={{
          width: "100%",
          backgroundColor: "white",
          borderRadius: 2,
          marginBottom: 1.5
        }}
      />
      <TextField
        id={"password"}
        variant={"filled"}
        label={"비밀번호"}
        size={"small"}
        sx={{
          width: "100%",
          backgroundColor: "white",
          borderRadius: 2
        }}
      />
      <Button
        variant={"contained"}
        sx={{
          backgroundColor: "#1AB9C5",
          filter: "brightness(1.0)",
          fontFamily: "Jua",
          fontSize: 18,
          width: "100%",
          height: 44,
          borderRadius: 2,
          marginTop: 3,
          ":hover": {
            backgroundColor: "#1AB9C5",
            filter: "brightness(0.8)"
          }
        }}
      >
        로그인
      </Button>
    </div>
  );
};

export default FormFields;
