import { Button, TextField } from "@mui/material";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import idAtom from "../../../Stores/Auth/id";
import passwordAtom from "../../../Stores/Auth/password";
import SignInErrorMessage from "./SignInErrorMessage";
import signInErrorMessageAtom from "../../../Stores/Auth/signInErrorMessage";
import validPasswordSelector from "../../../Stores/Auth/validPassword";
import { useNavigate } from "react-router-dom";
import Constants from "../../../Utilities/Constants";
import Swal from "sweetalert2";
import { SignInFieldsContainer } from "./SignInFieldsStyles";
import { authAxios } from "../../../Utilities/AxiosInstances";

const SignInFields = () => {
  const validPassword = useRecoilValue(validPasswordSelector);
  const [id, setID] = useRecoilState(idAtom);
  const [password, setPassword] = useRecoilState(passwordAtom);
  const setSignInErrorMessage = useSetRecoilState(signInErrorMessageAtom);
  const clearAllFields = () => {
    // 모든 필드를 초기화합니다.
    setID("");
    setPassword("");
  };
  const navigate = useNavigate();
  const signIn = async () => {
    try {
      const response = await authAxios.post("/api/ap002", {
        // 로그인 API를 호출합니다.
        id: id,
        pwd: password
      });
      const stringResponse = JSON.stringify(response, null, 2);
      console.log(stringResponse);
      switch (
        response.data.resultCode // 결과 코드에 따라서 다른 동작을 합니다.
      ) {
        case "100": // 로그인 성공
          await Swal.fire(Constants.SIGN_IN_SUCCEEDED);
          clearAllFields();
          sessionStorage.setItem("userNumber", response.data.user_no);
          sessionStorage.setItem("studentName", response.data.name);
          navigate("/");
          break;
        case "900": // 로그인 실패
          await Swal.fire(Constants.SIGN_IN_FAILED);
          break;
        case "901": // 아이디가 없음
          await Swal.fire(Constants.INVALID_ACCOUNT);
          break;
        case "902": // 비밀번호가 틀림
          await Swal.fire(Constants.INVALID_PASSWORD);
          break;
        default: // 서버 오류
          await Swal.fire(Constants.SERVER_ERROR);
          break;
      }
    } catch (error) {
      const errorString = JSON.stringify(error, null, 2);
      console.log(errorString);
    }
  };
  const onClickLogin = async () => {
    if (id.length === 0) {
      // 아이디가 비어있으면
      setSignInErrorMessage("아이디를 입력해주세요.");
    } else if (password.length === 0) {
      // 비밀번호가 비어있으면
      setSignInErrorMessage("비밀번호를 입력해주세요.");
    } else if (!validPassword && password !== "kidsbrown") {
      // 비밀번호가 유효하지 않거나, 예외적으로 kidsbrown이 아니면
      setSignInErrorMessage(
        "비밀번호는 알파벳, 숫자, 특수문자 조합으로 최소 6자리, 최대 24자리로 입력해주세요."
      );
    } else {
      // 아이디와 비밀번호가 모두 유효하면
      setSignInErrorMessage("");
      await signIn();
    }
  };
  return (
    <SignInFieldsContainer>
      <TextField
        id={"username"}
        name={"username"}
        inputProps={{
          autoComplete: "username"
        }}
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
        id={"current-password"}
        name={"current-password"}
        inputProps={{
          autoComplete: "current-password"
        }}
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
          backgroundColor: Constants.ACCENT_COLOR,
          filter: "brightness(1.0)",
          fontFamily: "Jua",
          fontSize: 18,
          width: "100%",
          height: 44,
          marginTop: 1.5,
          ":hover": {
            backgroundColor: Constants.ACCENT_COLOR
          }
        }}
      >
        로그인
      </Button>
    </SignInFieldsContainer>
  );
};

export default SignInFields;
