import { Button, TextField } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import idAtom from "../../../Stores/Auth/id";
import passwordAtom from "../../../Stores/Auth/password";
import SignInErrorMessage from "./SignInErrorMessage";
import signInErrorMessageAtom from "../../../Stores/Auth/signInErrorMessage";
import validPasswordSelector from "../../../Stores/Auth/validPassword";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Constants from "../../../Utilities/Constants";
import Swal from "sweetalert2";
import { SignInFieldsContainer } from "./SignInFieldsStyles";

const SignInFields = () => {
  const validPassword = useRecoilValue(validPasswordSelector);
  const [id, setID] = useRecoilState(idAtom);
  const [password, setPassword] = useRecoilState(passwordAtom);
  const [signInErrorMessage, setSignInErrorMessage] = useRecoilState(
    signInErrorMessageAtom
  );
  const clearAllFields = () => {
    setID("");
    setPassword("");
  };
  const navigate = useNavigate();
  const signIn = async () => {
    try {
      const response = await axios.post(
        `${Constants.AUTH_API_ENDPOINT}/api/ap002`,
        {
          id: id,
          pwd: password
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "*"
          }
        }
      );
      const stringResponse = JSON.stringify(response, null, 2);
      console.log(stringResponse);
      switch (response.data.resultCode) {
        case "100":
          await Swal.fire(Constants.SIGN_IN_SUCCEEDED);
          clearAllFields();
          sessionStorage.setItem("userNumber", response.data.user_no);
          sessionStorage.setItem("studentName", response.data.name);
          navigate("/");
          break;
        case "900":
          await Swal.fire(Constants.SIGN_IN_FAILED);
          break;
        case "901":
          await Swal.fire(Constants.INVALID_ACCOUNT);
          break;
        case "902":
          await Swal.fire(Constants.INVALID_PASSWORD);
          break;
        default:
          await Swal.fire(Constants.SERVER_ERROR);
          break;
      }
    } catch (error) {
      const errorString = JSON.stringify(error, null, 2);
      console.log(errorString);
    }
  };
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
      setSignInErrorMessage("");
      signIn();
    }
  };
  return (
    <SignInFieldsContainer>
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
