import { useRecoilState, useRecoilValue } from "recoil";
import passwordAtom from "../../../Stores/Auth/password";
import phoneNumberAtom from "../../../Stores/Auth/phoneNumber";
import studentNameAtom from "../../../Stores/Auth/studentName";
import studentBirthDateAtom from "../../../Stores/Auth/studentBirthDate";
import { Button, TextField } from "@mui/material";
import PasswordInfo from "../../SignScreen/SignUp/PasswordInfo";
import StudentLabel from "../../SignScreen/SignUp/StudentLabel";
import AccountDeletion from "./AccountDeletion";
import newPasswordAtom from "../../../Stores/Auth/newPassword";
import newPasswordConfirmAtom from "../../../Stores/Auth/newPasswordConfirm";
import {
  ModificationFormInnerContainer,
  ModificationFormOuterContainer,
  ModificationTitle,
  TextCenterContainer
} from "./ModificationFormStyles";
import { useNavigate } from "react-router-dom";
import secureModeAtom from "../../../Stores/Auth/secureMode";
import { useEffect, useLayoutEffect } from "react";
import Constants from "../../../Utilities/Constants";
import Swal from "sweetalert2";
import idAtom from "../../../Stores/Auth/id";
import validPasswordSelector from "../../../Stores/Auth/validPassword";
import { authPost } from "../../../Utilities/AxiosInstances";

const ModificationForm = () => {
  const [id, setID] = useRecoilState(idAtom);
  const [secureMode, setSecureMode] = useRecoilState(secureModeAtom);
  const [password, setPassword] = useRecoilState(passwordAtom);
  const [phoneNumber, setPhoneNumber] = useRecoilState(phoneNumberAtom);
  const [studentName, setStudentName] = useRecoilState(studentNameAtom);
  const [studentBirthDate, setStudentBirthDate] =
    useRecoilState(studentBirthDateAtom);
  const [newPassword, setNewPassword] = useRecoilState(newPasswordAtom);
  const [newPasswordConfirm, setNewPasswordConfirm] = useRecoilState(
    newPasswordConfirmAtom
  );
  const validPassword = useRecoilValue(validPasswordSelector);
  const navigate = useNavigate();
  const clearAllFields = () => {
    setPassword("");
    setPhoneNumber("");
    setStudentName("");
    setStudentBirthDate("");
    setNewPassword("");
    setNewPasswordConfirm("");
  };
  const onClickCancel = () => {
    clearAllFields();
    setSecureMode(false);
    navigate(-1);
  };
  useEffect(() => {
    return () => {
      clearAllFields();
      setSecureMode(false);
    };
  }, []);
  const requestAccountInformation = async () => {
    const response = await authPost("/api/ap008", {
      user_no: sessionStorage.getItem("userNumber")
    });
    const stringResponse = JSON.stringify(response, null, 2);
    console.log(stringResponse);
    switch (response.data.resultCode) {
      case "100":
        const { id, name, tel, birth } = response.data;
        setID(id);
        setStudentName(name);
        setPhoneNumber(tel);
        setStudentBirthDate(birth);
        break;
      default:
        await Swal.fire(Constants.SERVER_ERROR);
        break;
    }
  };
  useLayoutEffect(() => {
    requestAccountInformation();
  }, []);
  const requestAccountModification = async () => {
    const response = await authPost("/api/ap009", {
      user_no: sessionStorage.getItem("userNumber"),
      pwd: newPassword,
      pwd_chk: newPasswordConfirm,
      tel: phoneNumber,
      name: studentName,
      birth: studentBirthDate
    });
    const stringResponse = JSON.stringify(response, null, 2);
    console.log(stringResponse);
    switch (response.data.resultCode) {
      case "100":
        await Swal.fire(Constants.ACCOUNT_MODIFICATION_SUCCESS);
        sessionStorage.setItem("studentName", studentName);
        clearAllFields();
        navigate("/");
        break;
      case "900":
        await Swal.fire(Constants.ACCOUNT_MODIFICATION_FAILED);
        break;
      case "901":
        await Swal.fire(Constants.ACCOUNT_NOT_FOUND);
        break;
      case "902":
        await Swal.fire(Constants.PASSWORD_NOT_VALID);
        break;
      default:
        await Swal.fire(Constants.SERVER_ERROR);
        break;
    }
  };
  const onClickSubmit = () => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!?@#$%^*+=-])(?=.*[0-9]).{6,24}$/;
    const phoneNumberRegex = /^\d{3}-?\d{3,4}-?\d{4}$/;
    if (newPassword.length > 0 && !passwordRegex.test(newPassword)) {
      Swal.fire(Constants.PASSWORD_NOT_VALID);
    } else if (newPassword !== newPasswordConfirm) {
      Swal.fire(Constants.PASSWORD_NOT_MATCH);
    } else if (phoneNumber.length === 0) {
      Swal.fire(Constants.EMPTY_PHONE_NUMBER);
    } else if (!phoneNumberRegex.test(phoneNumber)) {
      Swal.fire(Constants.PHONE_NUMBER_NOT_VALID);
    } else if (studentBirthDate.length === 0) {
      Swal.fire(Constants.EMPTY_BIRTH_DATE);
    } else {
      requestAccountModification();
    }
  };
  return (
    <ModificationFormOuterContainer>
      <ModificationFormInnerContainer>
        <ModificationTitle>회원정보 변경</ModificationTitle>
        <TextField
          id={"id"}
          value={id}
          variant={"outlined"}
          label={"아이디"}
          disabled={true}
          size={"medium"}
          sx={{
            width: "100%",
            backgroundColor: "white",
            borderRadius: 2,
            marginBottom: 1.5
          }}
        />
        <PasswordInfo />
        <TextField
          id={"new-password"}
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
          variant={"outlined"}
          label={"새 비밀번호"}
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
        <TextField
          id={"new-password-confirm"}
          value={newPasswordConfirm}
          onChange={(event) => setNewPasswordConfirm(event.target.value)}
          variant={"outlined"}
          label={"새 비밀번호 확인"}
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
        <TextField
          id={"phone-number"}
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          variant={"outlined"}
          label={"휴대폰 번호 (예: 01012345678)"}
          size={"medium"}
          type={"phone-number"}
          required={true}
          sx={{
            width: "100%",
            backgroundColor: "white",
            borderRadius: 2,
            marginBottom: 1.5
          }}
        />
        <StudentLabel />
        <TextField
          id={"student-name"}
          value={sessionStorage.getItem("studentName")}
          onChange={(event) => setStudentName(event.target.value)}
          variant={"outlined"}
          label={"학생(자녀) 이름"}
          disabled={true}
          size={"medium"}
          sx={{
            width: "100%",
            backgroundColor: "white",
            borderRadius: 2,
            marginBottom: 1.5
          }}
        />
        <TextField
          id={"student-birth-date"}
          value={studentBirthDate}
          onChange={(event) => setStudentBirthDate(event.target.value)}
          variant={"outlined"}
          required={true}
          size={"medium"}
          type={"date"}
          sx={{
            width: "100%",
            backgroundColor: "white",
            borderRadius: 2,
            marginBottom: 1.5
          }}
        />
        <AccountDeletion />
        <TextCenterContainer>
          <Button
            onClick={onClickCancel}
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
            onClick={onClickSubmit}
            sx={{
              paddingX: "25px",
              backgroundColor: Constants.ACCENT_COLOR,
              "&:hover": {
                backgroundColor: Constants.ACCENT_COLOR
              }
            }}
          >
            수정
          </Button>
        </TextCenterContainer>
      </ModificationFormInnerContainer>
    </ModificationFormOuterContainer>
  );
};

export default ModificationForm;
