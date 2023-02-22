import { Button, Checkbox, InputAdornment, TextField } from "@mui/material";
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
import couponMessageAtom from "../../../Stores/Auth/couponMessage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Constants from "../../../Utilities/Constants";

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
  const [couponMessage, setCouponMessage] = useRecoilState(couponMessageAtom);
  const [agreeStatus, setAgreeStatus] = useRecoilState(agreeStatusAtom);
  const clearAllFields = () => {
    setID("");
    setPassword("");
    setPasswordConfirm("");
    setPhoneNumber("");
    setStudentName("");
    setStudentBirthDate("");
    setCoupon("");
    setAgreeStatus(false);
  };
  const navigate = useNavigate();
  const signIn = async () => {
    try {
      const response = await axios.post(
        `${Constants.AUTH_API_ENDPOINT}/api/ap002`,
        {
          id: id,
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
      if (response.data.resultCode === "100") {
        sessionStorage.setItem("userNumber", response.data.user_no);
        sessionStorage.setItem("studentName", response.data.name);
        alert(`${studentName}님, 환영합니다.`);
        navigate("/");
      } else if (response.data.resultCode === "200") {
        alert("해당 계정 정보가 존재하지 않습니다.");
      } else if (response.data.resultCode === "900") {
        alert("로그인에 실패하였습니다.");
      } else {
        alert("서버 에러.");
      }
    } catch (error) {
      const errorString = JSON.stringify(error, null, 2);
      console.log(errorString);
    }
  };
  const signUp = async () => {
    try {
      const response = await axios.post(
        `${Constants.AUTH_API_ENDPOINT}/api/ap001`,
        {
          id: id,
          pwd: password,
          name: studentName,
          tel: phoneNumber,
          birth: studentBirthDate
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
      if (response.data.resultCode === "100") {
        alert("회원가입에 성공하였습니다.");
        clearAllFields();
        signIn();
      } else if (response.data.resultCode === "900") {
        alert("회원가입에 실패하였습니다.");
      } else {
        alert("서버 에러.");
      }
    } catch (error) {
      const errorString = JSON.stringify(error, null, 2);
      console.log(errorString);
    }
  };
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
      signUp();
    }
  };
  const onClickRegisterCoupon = () => {
    if (coupon.length === 0) {
      alert("쿠폰을 입력해주세요.");
    } else {
      setCouponMessage("쿠폰이 등록되었습니다.");
      setCoupon("");
    }
  };
  return (
    <div className={`pt-3`}>
      <p className={`text-right mb-1 text-red-600`}>* 표시 필수 입력</p>
      <TextField
        id={"id"}
        value={id}
        onChange={(event) => setID(event.target.value)}
        variant={"outlined"}
        label={"아이디"}
        size={"medium"}
        InputProps={{
          endAdornment: (
            <InputAdornment position={"end"}>
              {id.length === 0 && (
                <p
                  className={`relative top-[3px] right-[8px] text-red-600 font-bold`}
                >
                  *
                </p>
              )}
            </InputAdornment>
          )
        }}
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
        size={"medium"}
        type={"password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position={"end"}>
              {password.length === 0 && (
                <p
                  className={`relative top-[3px] right-[8px] text-red-600 font-bold`}
                >
                  *
                </p>
              )}
            </InputAdornment>
          )
        }}
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
        size={"medium"}
        type={"password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position={"end"}>
              {passwordConfirm.length === 0 && (
                <p
                  className={`relative top-[3px] right-[8px] text-red-600 font-bold`}
                >
                  *
                </p>
              )}
            </InputAdornment>
          )
        }}
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
          if (event.target.value.match(/^[0-9]*$/)) {
            setPhoneNumber(event.target.value);
          }
        }}
        variant={"outlined"}
        label={"휴대폰 번호 (예: 01012345678)"}
        size={"medium"}
        type={"phone-number"}
        InputProps={{
          endAdornment: (
            <InputAdornment position={"end"}>
              {phoneNumber.length === 0 && (
                <p
                  className={`relative top-[3px] right-[8px] text-red-600 font-bold`}
                >
                  *
                </p>
              )}
            </InputAdornment>
          )
        }}
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
        size={"medium"}
        InputProps={{
          endAdornment: (
            <InputAdornment position={"end"}>
              {studentName.length === 0 && (
                <p
                  className={`relative top-[3px] right-[8px] text-red-600 font-bold`}
                >
                  *
                </p>
              )}
            </InputAdornment>
          )
        }}
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
      {couponMessage.length > 0 && (
        <p className={"text-green-600 text-[14px] mt-1"}>{couponMessage}</p>
      )}
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
