import { useRecoilState } from "recoil";
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
  PasswordNoticeText,
  TextCenterContainer
} from "./ModificationFormStyles";
import { useNavigate } from "react-router-dom";
import secureModeAtom from "../../../Stores/Auth/secureMode";

const ModificationForm = () => {
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
  return (
    <ModificationFormOuterContainer>
      <ModificationFormInnerContainer>
        <ModificationTitle>회원정보 변경</ModificationTitle>
        <TextField
          id={"id"}
          value={"Your ID"}
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
        <TextField
          id={"password"}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          variant={"outlined"}
          label={"현재 비밀번호"}
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
        <PasswordInfo />
        <PasswordNoticeText>
          비밀번호를 변경하지 않을 시에는 비워두세요.
        </PasswordNoticeText>
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
          required={true}
          size={"medium"}
          type={"phone-number"}
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
          value={studentName}
          onChange={(event) => setStudentName(event.target.value)}
          variant={"outlined"}
          label={"학생(자녀) 이름"}
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
          >
            수정
          </Button>
        </TextCenterContainer>
      </ModificationFormInnerContainer>
    </ModificationFormOuterContainer>
  );
};

export default ModificationForm;
