import { TextField } from "@mui/material";

const SignInFields = () => {
  return (
    <div className={`py-3`}>
      <TextField
        id={"id"}
        variant={"outlined"}
        label={"아이디"}
        required={true}
        size={"medium"}
        sx={{
          width: "100%",
          backgroundColor: "white",
          borderRadius: 2,
          marginBottom: 1.5
        }}
      />
      <TextField
        id={"password"}
        variant={"outlined"}
        label={"비밀번호"}
        required={true}
        size={"medium"}
        type={"password"}
        sx={{
          width: "100%",
          backgroundColor: "white",
          borderRadius: 2,
          marginBottom: 1.5
        }}
      />
    </div>
  );
};

export default SignInFields;
