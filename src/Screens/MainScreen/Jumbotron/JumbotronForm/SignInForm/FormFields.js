import { Button, TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import idAtom from "../../../../../Stores/Auth/id";
import passwordAtom from "../../../../../Stores/Auth/password";
import Constants from "../../../../../Utilities/Constants";
import Swal from "sweetalert2";
import { authAxios } from "../../../../../Utilities/AxiosInstances";

const FormFields = () => {
  const [id, setID] = useRecoilState(idAtom);
  const [password, setPassword] = useRecoilState(passwordAtom);
  const clearAllFields = () => {
    setID("");
    setPassword("");
  };
  const signIn = async () => {
    try {
      const response = await authAxios.post("/api/ap002", {
        id: id,
        pwd: password
      });
      const stringResponse = JSON.stringify(response, null, 2);
      console.log(stringResponse);
      switch (response.data.resultCode) {
        case "100":
          await Swal.fire(Constants.WELCOME);
          clearAllFields();
          sessionStorage.setItem("userNumber", response.data.user_no);
          sessionStorage.setItem("studentName", response.data.name);
          window.location.reload();
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
  const onLogInButtonClicked = async () => {
    if (id.length === 0) {
      await Swal.fire(Constants.EMPTY_ID);
    } else if (password.length === 0) {
      await Swal.fire(Constants.EMPTY_PASSWORD);
    } else {
      await signIn();
    }
  };
  return (
    <>
      <TextField
        id={"username"}
        name={"username"}
        inputProps={{ autoComplete: "username" }}
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
        id={"current-password"}
        name={"current-password"}
        inputProps={{
          autoComplete: "current-password"
        }}
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
        disableTouchRipple={true}
        sx={{
          backgroundColor: Constants.ACCENT_COLOR,
          lineHeight: 1.2,
          boxShadow: "none",
          letterSpacing: 0,
          fontFamily: "Jua",
          fontSize: 18,
          width: "100%",
          height: "36px",
          borderRadius: 2,
          marginTop: 2,
          ":hover": {
            backgroundColor: Constants.ACCENT_COLOR
          }
        }}
      >
        로그인
      </Button>
    </>
  );
};

export default FormFields;
