import { useRecoilState, useSetRecoilState } from "recoil";
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
import { authAxios } from "../../../Utilities/AxiosInstances";

const ModificationForm = () => {
  const [id, setID] = useRecoilState(idAtom);
  const setSecureMode = useSetRecoilState(secureModeAtom);
  const setPassword = useSetRecoilState(passwordAtom);
  const [phoneNumber, setPhoneNumber] = useRecoilState(phoneNumberAtom);
  const [studentName, setStudentName] = useRecoilState(studentNameAtom);
  const [studentBirthDate, setStudentBirthDate] =
    useRecoilState(studentBirthDateAtom);
  const [newPassword, setNewPassword] = useRecoilState(newPasswordAtom);
  const [newPasswordConfirm, setNewPasswordConfirm] = useRecoilState(
    newPasswordConfirmAtom
  );
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
    setSecureMode(false); // 보안 모드를 해제합니다.
    navigate(-1); // 이전 페이지로 이동합니다.
  };
  useEffect(() => {
    return () => {
      clearAllFields();
      setSecureMode(false);
    };
  }, []); // 컴포넌트가 언마운트되면, 즉, 페이지를 벗어나면, 모든 필드를 초기화하고 보안 모드를 해제합니다.
  const requestAccountInformation = async () => {
    const response = await authAxios.post("/api/ap008", {
      // 계정 정보를 요청합니다.
      user_no: sessionStorage.getItem("userNumber")
    });
    const stringResponse = JSON.stringify(response, null, 2);
    console.log(stringResponse);
    switch (
      response.data.resultCode // 응답 코드에 따라 분기합니다.
    ) {
      case "100": // 성공
        const { id, name, tel, birth } = response.data;
        setID(id);
        setStudentName(name);
        setPhoneNumber(tel);
        setStudentBirthDate(birth);
        break;
      default: // 실패
        await Swal.fire(Constants.SERVER_ERROR);
        break;
    }
  };
  useLayoutEffect(() => {
    (async () => {
      await requestAccountInformation();
    })(); // 페이지가 로드되면, 즉, 렌더링되면, 계정 정보를 요청합니다.
  }, []);
  const requestAccountModification = async () => {
    const response = await authAxios.post("/api/ap009", {
      // 계정 정보를 수정합니다.
      user_no: sessionStorage.getItem("userNumber"),
      pwd: newPassword,
      pwd_chk: newPasswordConfirm,
      tel: phoneNumber,
      name: studentName,
      birth: studentBirthDate
    });
    const stringResponse = JSON.stringify(response, null, 2);
    console.log(stringResponse);
    switch (
      response.data.resultCode // 응답 코드에 따라 분기합니다.
    ) {
      case "100": // 성공
        await Swal.fire(Constants.ACCOUNT_MODIFICATION_SUCCESS);
        sessionStorage.setItem("studentName", studentName);
        clearAllFields();
        navigate("/");
        break;
      case "900": // 실패
        await Swal.fire(Constants.ACCOUNT_MODIFICATION_FAILED);
        break;
      case "901": // 존재하지 않는 회원
        await Swal.fire(Constants.ACCOUNT_NOT_FOUND);
        break;
      case "902": // 비밀번호가 일치하지 않음
        await Swal.fire(Constants.PASSWORD_NOT_VALID);
        break;
      default: // 서버 오류
        await Swal.fire(Constants.SERVER_ERROR);
        break;
    }
  };
  const onClickSubmit = async () => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!?@#$%^*+=-])(?=.*[0-9]).{6,24}$/; // 비밀번호 정규식
    const phoneNumberRegex = /^\d{3}-?\d{3,4}-?\d{4}$/; // 전화번호 정규식
    if (newPassword.length > 0 && !passwordRegex.test(newPassword)) {
      // 비밀번호가 입력되었고, 비밀번호가 유효하지 않다면
      await Swal.fire(Constants.PASSWORD_NOT_VALID);
    } else if (newPassword !== newPasswordConfirm) {
      // 비밀번호와 비밀번호 확인이 일치하지 않다면
      await Swal.fire(Constants.PASSWORD_NOT_MATCH);
    } else if (phoneNumber.length === 0) {
      // 전화번호가 입력되지 않았다면
      await Swal.fire(Constants.EMPTY_PHONE_NUMBER);
    } else if (!phoneNumberRegex.test(phoneNumber)) {
      // 전화번호가 유효하지 않다면
      await Swal.fire(Constants.PHONE_NUMBER_NOT_VALID);
    } else if (studentBirthDate.length === 0) {
      // 생년월일이 입력되지 않았다면
      await Swal.fire(Constants.EMPTY_BIRTH_DATE);
    } else {
      // 모든 조건을 만족한다면
      await requestAccountModification();
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
