import { useRecoilState } from "recoil";
import idAtom from "../../../Stores/Auth/id";
import passwordAtom from "../../../Stores/Auth/password";
import passwordConfirmAtom from "../../../Stores/Auth/passwordConfirm";
import phoneNumberAtom from "../../../Stores/Auth/phoneNumber";
import studentNameAtom from "../../../Stores/Auth/studentName";
import studentBirthDateAtom from "../../../Stores/Auth/studentBirthDate";
import couponAtom from "../../../Stores/Auth/coupon";
import agreeStatusAtom from "../../../Stores/Auth/agreeStatus";
import { TextField } from "@mui/material";
import PasswordInfo from "../../SignInScreen/SignUp/PasswordInfo";
import StudentLabel from "../../SignInScreen/SignUp/StudentLabel";
import AccountDeletion from "./AccountDeletion";

const ModificationForm = () => {
  const [id, setID] = useRecoilState(idAtom);
  const [password, setPassword] = useRecoilState(passwordAtom);
  const [passwordConfirm, setPasswordConfirm] =
    useRecoilState(passwordConfirmAtom);
  const [phoneNumber, setPhoneNumber] = useRecoilState(phoneNumberAtom);
  const [studentName, setStudentName] = useRecoilState(studentNameAtom);
  const [studentBirthDate, setStudentBirthDate] =
    useRecoilState(studentBirthDateAtom);
  const [coupon, setCoupon] = useRecoilState(couponAtom);
  const [agreeStatus, setAgreeStatus] = useRecoilState(agreeStatusAtom);
  const onClickSignUp = () => {};
  return (
    <div className={`flex flex-row justify-center`}>
      <div className={`pt-3 w-[500px]`}>
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
        <TextField
          id={"password-confirm"}
          value={passwordConfirm}
          onChange={(event) => setPasswordConfirm(event.target.value)}
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
          id={"password-confirm"}
          value={passwordConfirm}
          onChange={(event) => setPasswordConfirm(event.target.value)}
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
      </div>
    </div>
  );
};

export default ModificationForm;
