import { Button, Checkbox, TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import idAtom from "../../../Stores/Auth/id";
import passwordAtom from "../../../Stores/Auth/password";
import PasswordInfo from "./PasswordInfo";
import passwordConfirmAtom from "../../../Stores/Auth/passwordConfirm";
import phoneNumberAtom from "../../../Stores/Auth/phoneNumber";
import StudentLabel from "./StudentLabel";
import studentNameAtom from "../../../Stores/Auth/studentName";
import studentBirthDateAtom from "../../../Stores/Auth/studentBirthDate";
import CouponLabel from "./CouponLabel";
import couponAtom from "../../../Stores/Auth/coupon";
import agreeStatusAtom from "../../../Stores/Auth/agreeStatus";

const SignUpFields = () => {
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
    <div className={`py-3`}>
      <TextField
        id={"id"}
        value={id}
        onChange={(event) => setID(event.target.value)}
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
        value={password}
        onChange={(event) => setPassword(event.target.value)}
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
      <PasswordInfo />
      <TextField
        id={"password-confirm"}
        value={passwordConfirm}
        onChange={(event) => setPasswordConfirm(event.target.value)}
        variant={"outlined"}
        label={"비밀번호 확인"}
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
      <CouponLabel />
      <div className={`flex flex-row items-center`}>
        <TextField
          id={"coupon"}
          value={coupon}
          onChange={(event) => setCoupon(event.target.value)}
          variant={"outlined"}
          label={"예) ########"}
          size={"small"}
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            marginBottom: 1.5,
            flexGrow: 1,
            margin: 0,
            marginRight: 1
          }}
        />
        <Button variant={"contained"}>등록</Button>
      </div>
      <div className={"flex flex-row items-center relative left-[-12px]"}>
        <Checkbox
          checked={agreeStatus}
          onChange={(event) => setAgreeStatus(event.target.checked)}
        />
        <p className={"font-extralight text-[16px]"}>
          이용약관 및 개인정보취급방침에 동의합니다. (필수)
        </p>
      </div>
      <Button
        variant={"contained"}
        onClick={onClickSignUp}
        sx={{
          backgroundColor: "#1AB9C5",
          filter: "brightness(1.0)",
          fontFamily: "Jua",
          fontSize: 18,
          width: "100%",
          height: 44,
          marginTop: 1.5,
          ":hover": {
            backgroundColor: "#1AB9C5",
            filter: "brightness(0.8)"
          }
        }}
      >
        회원가입
      </Button>
    </div>
  );
};

export default SignUpFields;
