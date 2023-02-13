import { TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import passwordAtom from "../../../Stores/Auth/password";

const PasswordField = () => {
  const [password, setPassword] = useRecoilState(passwordAtom);
  const onChangePassword = (event) => {
    setPassword(event.target.value.replace(/\s/g, ""));
  };
  return (
    <div className={`flex flex-row justify-center mb-6`}>
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
    </div>
  );
};

export default PasswordField;
