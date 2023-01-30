import { TextField } from "@mui/material";

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
    </div>
  );
};

export default FormFields;
