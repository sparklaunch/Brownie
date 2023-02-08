import { Button, Checkbox, TextField } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
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
import validPasswordSelector from "../../../Stores/Auth/validPassword";
import validPhoneNumberSelector from "../../../Stores/Auth/validPhoneNumber";

const SignUpFields = () => {
  const validPhoneNumber = useRecoilValue(validPhoneNumberSelector);
  const validPassword = useRecoilValue(validPasswordSelector);
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
  const onClickSignUp = () => {
    if (id.length === 0) {
      alert("아이디를 입력해주세요.");
    } else if (password.length === 0) {
      alert("비밀번호를 입력해주세요.");
    } else if (!validPassword) {
      alert(
        "비밀번호는 영문, 숫자, 특수문자를 포함한 6~24자리로 입력해주세요."
      );
    } else if (passwordConfirm.length === 0) {
      alert("비밀번호 확인을 입력해주세요.");
    } else if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
    } else if (phoneNumber.length === 0) {
      alert("전화번호를 입력해주세요.");
    } else if (!validPhoneNumber) {
      alert("전화번호 형식이 올바르지 않습니다.");
    } else if (studentName.length === 0) {
      alert("학생 이름을 입력해주세요.");
    } else if (agreeStatus === false) {
      alert("약관에 동의해주세요.");
    } else {
      alert("회원가입이 완료되었습니다.");
    }
  };
  const onClickRegisterCoupon = () => {
    if (coupon.length === 0) {
      alert("쿠폰을 입력해주세요.");
    } else {
      alert("쿠폰이 등록되었습니다.");
    }
  };
  return (
    <div className={`pt-3`}>
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
        error={!validPassword}
        value={password}
        onChange={(event) => {
          if (!event.target.value.match(/\s/)) {
            setPassword(event.target.value);
          }
        }}
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
        error={password !== passwordConfirm || !validPassword}
        value={passwordConfirm}
        onChange={(event) => {
          if (!event.target.value.match(/\s/)) {
            setPasswordConfirm(event.target.value);
          }
        }}
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
        error={!validPhoneNumber}
        value={phoneNumber}
        onChange={(event) => {
          if (event.target.value.match(/^([0-9]|-)*$/)) {
            setPhoneNumber(event.target.value);
          }
        }}
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
        <Button
          variant={"contained"}
          onClick={onClickRegisterCoupon}
          sx={{
            backgroundColor: "#222",
            ":hover": {
              backgroundColor: "#222"
            }
          }}
        >
          등록
        </Button>
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
            backgroundColor: "#1AB9C5"
          }
        }}
      >
        회원가입
      </Button>
    </div>
  );
};

export default SignUpFields;
