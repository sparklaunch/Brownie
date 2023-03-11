import { Button, TextField } from "@mui/material";
import {
  AdministratorSignInFormContainer,
  AdministratorSignInTitle
} from "./AdministratorSignInFormStyles";
import Constants from "../../Utilities/Constants";

const AdministratorSignInForm = () => {
  return (
    <AdministratorSignInFormContainer>
      <AdministratorSignInTitle>관리자 로그인</AdministratorSignInTitle>
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
    </AdministratorSignInFormContainer>
  );
};

export default AdministratorSignInForm;
