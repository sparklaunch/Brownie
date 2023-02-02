import { Button, Checkbox, TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import autoLogInEnabledAtom from "../../../Stores/Auth/autoLogInEnabled";
import idAtom from "../../../Stores/Auth/id";
import passwordAtom from "../../../Stores/Auth/password";
import SignInErrorMessage from "./SignInErrorMessage";
import signInErrorMessageAtom from "../../../Stores/Auth/signInErrorMessage";

const SignInFields = () => {
  const [id, setID] = useRecoilState(idAtom);
  const [password, setPassword] = useRecoilState(passwordAtom);
  const [autoLogInEnabled, setAutoLogInEnabled] =
    useRecoilState(autoLogInEnabledAtom);
  const [signInErrorMessage, setSignInErrorMessage] = useRecoilState(
    signInErrorMessageAtom
  );
  const onClickLogin = () => {
    if (id === "") {
      setSignInErrorMessage("아이디를 입력해주세요.");
    } else {
      if (password === "") {
        setSignInErrorMessage("비밀번호를 입력해주세요.");
      } else {
        if (password.length < 6) {
          setSignInErrorMessage("비밀번호는 6자 이상이어야 합니다.");
        } else {
          setSignInErrorMessage("");
        }
      }
    }
  };
  return (
    <div className={`py-3`}>
      <TextField
        id={"id"}
        value={id}
        onChange={(event) => setID(event.target.value.replace(/ /g, ""))}
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
        value={password}
        onChange={(event) => setPassword(event.target.value.replace(/ /g, ""))}
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
      <SignInErrorMessage />
      <Button
        variant={"contained"}
        onClick={onClickLogin}
        sx={{
          backgroundColor: "#1AB9C5",
          filter: "brightness(1.0)",
          fontFamily: "Jua",
          fontSize: 18,
          width: "100%",
          height: 44,
          marginTop: 1.5,
          ":hover": {
            backgroundColor: "#1AB9C5"
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
        <p className={"font-extralight text-[16px]"}>자동 로그인</p>
      </div>
    </div>
  );
};

export default SignInFields;
