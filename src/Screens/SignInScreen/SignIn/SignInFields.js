import { Button, Checkbox, TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import autoLogInEnabledAtom from "../../../Stores/Auth/autoLogInEnabled";

const SignInFields = () => {
  const [autoLogInEnabled, setAutoLogInEnabled] =
    useRecoilState(autoLogInEnabledAtom);
  const onClickLogin = () => {};
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
        <p className={"font-extralight text-[16px]"}>자동 로그인</p>
      </div>
    </div>
  );
};

export default SignInFields;
