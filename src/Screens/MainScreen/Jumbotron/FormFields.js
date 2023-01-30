import { Button, Checkbox, TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import idAtom from "../../../Stores/Auth/id";
import passwordAtom from "../../../Stores/Auth/password";
import autoLogInEnabledAtom from "../../../Stores/Auth/autoLogInEnabled";

const FormFields = () => {
  const [id, setID] = useRecoilState(idAtom);
  const [password, setPassword] = useRecoilState(passwordAtom);
  const [autoLogInEnabled, setAutoLogInEnabled] =
    useRecoilState(autoLogInEnabledAtom);
  return (
    <div>
      <TextField
        id={"id"}
        variant={"filled"}
        label={"아이디"}
        size={"small"}
        value={id}
        onChange={(event) => setID(event.target.value)}
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
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        type={"password"}
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
          marginTop: 2,
          ":hover": {
            backgroundColor: "#1AB9C5",
            filter: "brightness(0.8)"
          }
        }}
      >
        로그인
      </Button>
      <div className={"flex flex-row items-center relative left-[-12px]"}>
        <Checkbox
          checked={autoLogInEnabled}
          onChange={(event) => setAutoLogInEnabled(event.target.checked)}
        />
        <p className={"text-white font-extralight text-[14px]"}>자동 로그인</p>
      </div>
    </div>
  );
};

export default FormFields;
