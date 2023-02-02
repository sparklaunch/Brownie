import { TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import passwordAtom from "../../../Stores/Auth/password";

const PasswordField = () => {
  const [password, setPassword] = useRecoilState(passwordAtom);
  return (
    <div className={`flex flex-row justify-center mb-6`}>
      <TextField
        variant={"outlined"}
        label={"비밀번호"}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
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
