import { TextField } from "@mui/material";

const PasswordField = () => {
  return (
    <div className={`flex flex-row justify-center`}>
      <TextField
        variant={"outlined"}
        label={"비밀번호"}
        type={"password"}
        size={"small"}
        sx={{
          width: "400px",
          backgroundColor: "white"
        }}
      />
    </div>
  );
};

export default PasswordField;
