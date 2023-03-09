import { TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import passwordAtom from "../../../Stores/Auth/password";
import { PasswordFieldContainer } from "./PasswordFieldStyles";

const PasswordField = () => {
  const [password, setPassword] = useRecoilState(passwordAtom);
  const onChangePassword = (event) => {
    setPassword(event.target.value.replace(/\s/g, "")); // 공백 제거
  };
  return (
    <PasswordFieldContainer>
      <TextField
        variant={"outlined"}
        label={"비밀번호"}
        value={password}
        onChange={onChangePassword}
        type={"password"}
        size={"small"}
        sx={{
          width: "400px",
          backgroundColor: "white"
        }}
      />
    </PasswordFieldContainer>
  );
};

export default PasswordField;
