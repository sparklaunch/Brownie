import { Button } from "@mui/material";
import { AccountButtonsContainer } from "./AccountButtonsStyles";
import Constants from "../../../Utilities/Constants";
import { useRecoilState, useSetRecoilState } from "recoil";
import passwordAtom from "../../../Stores/Auth/password";
import Swal from "sweetalert2";
import secureModeAtom from "../../../Stores/Auth/secureMode";
import { authAxios } from "../../../Utilities/AxiosInstances";

const AccountButtons = () => {
  const setSecureMode = useSetRecoilState(secureModeAtom);
  const [password, setPassword] = useRecoilState(passwordAtom);
  const requestPasswordMatch = async () => {
    const response = await authAxios.post("/api/ap007", {
      // 비밀번호 확인 API를 호출합니다.
      user_no: sessionStorage.getItem("userNumber"),
      pwd: password
    });
    const stringResponse = JSON.stringify(response, null, 2);
    console.log(stringResponse);
    switch (
      response.data.resultCode // 결과 코드에 따라서 다른 동작을 합니다.
    ) {
      case "100": // 비밀번호가 일치합니다.
        setPassword("");
        setSecureMode(true);
        break;
      case "900": // 비밀번호가 비어있습니다.
        await Swal.fire(Constants.EMPTY_PASSWORD);
        break;
      case "901": // 비밀번호가 일치하지 않습니다.
        await Swal.fire(Constants.INCORRECT_PASSWORD);
        break;
      default: // 서버 오류
        await Swal.fire(Constants.SERVER_ERROR);
        break;
    }
  };
  const onClickSubmitButton = async () => {
    await requestPasswordMatch();
  };
  return (
    <AccountButtonsContainer>
      <Button
        variant={"outlined"}
        sx={{
          marginRight: "15px",
          paddingX: "25px",
          color: Constants.SOOT,
          borderColor: Constants.SOOT,
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "white",
            borderColor: Constants.SOOT
          }
        }}
      >
        취소
      </Button>
      <Button
        variant={"contained"}
        sx={{
          paddingX: "25px",
          backgroundColor: Constants.ACCENT_COLOR,
          "&:hover": {
            backgroundColor: Constants.ACCENT_COLOR
          }
        }}
        onClick={onClickSubmitButton}
      >
        확인
      </Button>
    </AccountButtonsContainer>
  );
};

export default AccountButtons;
