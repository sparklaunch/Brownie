import { Button, TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import idAtom from "../../../Stores/Auth/id";
import passwordAtom from "../../../Stores/Auth/password";
import autoLogInEnabledAtom from "../../../Stores/Auth/autoLogInEnabled";
import axios from "axios";

const FormFields = () => {
  const [id, setID] = useRecoilState(idAtom);
  const [password, setPassword] = useRecoilState(passwordAtom);
  const [autoLogInEnabled, setAutoLogInEnabled] =
    useRecoilState(autoLogInEnabledAtom);
  const clearAllFields = () => {
    setID("");
    setPassword("");
  };
  const signIn = async () => {
    try {
      const response = await axios.post(
        `/api/ap002?id=${id}&pwd=${password}`,
        "",
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );
      const stringResponse = JSON.stringify(response, null, 2);
      console.log(stringResponse);
      if (response.data.resultCode === "100") {
        alert("로그인에 성공하였습니다.");
        clearAllFields();
        sessionStorage.setItem("userNumber", response.data.user_no);
        window.location.reload();
      } else if (response.data.resultCode === "200") {
        alert("비밀번호가 일치하지 않습니다.");
      } else if (response.data.resultCode === "900") {
        alert("로그인에 실패했습니다.");
      } else {
        alert("서버 에러.");
      }
    } catch (error) {
      const errorString = JSON.stringify(error, null, 2);
      console.log(errorString);
    }
  };
  const onLogInButtonClicked = () => {
    if (id.length === 0) {
      alert("아이디를 입력해주세요.");
    } else if (password.length === 0) {
      alert("비밀번호를 입력해주세요.");
    } else {
      signIn();
    }
  };
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
        onClick={onLogInButtonClicked}
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
            backgroundColor: "#1AB9C5"
          }
        }}
      >
        로그인
      </Button>
    </div>
  );
};

export default FormFields;
