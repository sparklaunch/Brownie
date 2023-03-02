import { Button } from "@mui/material";
import { AccountButtonsContainer } from "./AccountButtonsStyles";
import axios from "axios";
import Constants from "../../../Utilities/Constants";
import { useRecoilState } from "recoil";
import passwordAtom from "../../../Stores/Auth/password";
import Swal from "sweetalert2";
import secureModeAtom from "../../../Stores/Auth/secureMode";

const AccountButtons = () => {
  const [secureMode, setSecureMode] = useRecoilState(secureModeAtom);
  const [password, setPassword] = useRecoilState(passwordAtom);
  const requestPasswordMatch = async () => {
    const response = await axios.post(
      `${Constants.AUTH_API_ENDPOINT}/api/ap007`,
      {
        user_no: sessionStorage.getItem("userNumber"),
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
        setSecureMode(true);
        break;
      case "900":
        await Swal.fire(Constants.EMPTY_PASSWORD);
        break;
      case "901":
        await Swal.fire(Constants.INCORRECT_PASSWORD);
        break;
      default:
        await Swal.fire(Constants.SERVER_ERROR);
        break;
    }
  };
  const onClickSubmitButton = () => {
    requestPasswordMatch();
  };
  return (
    <AccountButtonsContainer>
      <Button
        variant={"outlined"}
        sx={{
          marginRight: "15px",
          paddingX: "25px",
          color: "#707070",
          borderColor: "#707070",
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "white",
            borderColor: "#707070"
          }
        }}
      >
        취소
      </Button>
      <Button
        variant={"contained"}
        sx={{
          paddingX: "25px",
          backgroundColor: "#1AB9C5",
          "&:hover": {
            backgroundColor: "#1AB9C5"
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
