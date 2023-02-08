import { Button, Checkbox, TextField } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import autoLogInEnabledAtom from "../../../Stores/Auth/autoLogInEnabled";
import idAtom from "../../../Stores/Auth/id";
import passwordAtom from "../../../Stores/Auth/password";
import SignInErrorMessage from "./SignInErrorMessage";
import signInErrorMessageAtom from "../../../Stores/Auth/signInErrorMessage";
import validPasswordSelector from "../../../Stores/Auth/validPassword";

const SignInFields = () => {
  const validPassword = useRecoilValue(validPasswordSelector);
  const [id, setID] = useRecoilState(idAtom);
  const [password, setPassword] = useRecoilState(passwordAtom);
  const [autoLogInEnabled, setAutoLogInEnabled] =
    useRecoilState(autoLogInEnabledAtom);
  const [signInErrorMessage, setSignInErrorMessage] = useRecoilState(
    signInErrorMessageAtom
  );
  const onClickLogin = () => {
    if (id.length === 0) {
      setSignInErrorMessage("아이디를 입력해주세요.");
    } else if (password.length === 0) {
      setSignInErrorMessage("비밀번호를 입력해주세요.");
    } else if (!validPassword) {
      setSignInErrorMessage(
        "비밀번호는 알파벳, 숫자, 특수문자 조합으로 최소 6자리, 최대 24자리로 입력해주세요."
      );
    } else {
      alert("로그인 성공");
      setSignInErrorMessage("");
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
        error={!validPassword}
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
