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
import couponMessageAtom from "../../../Stores/Auth/couponMessage";
import { useNavigate } from "react-router-dom";
import Constants from "../../../Utilities/Constants";
import Swal from "sweetalert2";
import {
  AsteriskContainer,
  CouponFieldContainer,
  CouponMessageText,
  RelativeContainer,
  RequiredFieldsNoticeText,
  SignUpFieldsContainer,
  TermsContainer,
  TermsText
} from "./SignUpFieldsStyles";
import { authAxios } from "../../../Utilities/AxiosInstances";

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
    // 모든 필드를 초기화합니다.
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
      const response = await authAxios.post("/api/ap002", {
        // 로그인 API를 호출합니다.
        id: id,
        pwd: password
      });
      const stringResponse = JSON.stringify(response, null, 2);
      console.log(stringResponse);
      if (response.data.resultCode === "100") {
        // 로그인 성공
        sessionStorage.setItem("userNumber", response.data.user_no);
        sessionStorage.setItem("studentName", response.data.name);
        navigate("/");
      } else if (response.data.resultCode === "200") {
        // 아이디가 없음
        await Swal.fire(Constants.INVALID_ACCOUNT);
      } else if (response.data.resultCode === "900") {
        // 비밀번호가 틀림
        await Swal.fire(Constants.SIGN_IN_FAILED);
      } else {
        // 서버 에러
        await Swal.fire(Constants.SERVER_ERROR);
      }
    } catch (error) {
      const errorString = JSON.stringify(error, null, 2);
      console.log(errorString);
    }
  };
  const signUp = async () => {
    try {
      const response = await authAxios.post("/api/ap001", {
        // 회원가입 API를 호출합니다.
        id: id,
        pwd: password,
        name: studentName,
        tel: phoneNumber,
        birth: studentBirthDate
      });
      const stringResponse = JSON.stringify(response, null, 2);
      console.log(stringResponse);
      switch (
        response.data.resultCode // 회원가입 결과에 따라 다른 메시지를 띄웁니다.
      ) {
        case "100": // 회원가입 성공
          await Swal.fire({
            title: "환영합니다",
            text: `${studentName}님, 환영합니다!.`,
            icon: "success",
            confirmButtonText: "확인"
          });
          clearAllFields();
          await signIn();
          break;
        case "900": // 회원가입 실패
          await Swal.fire(Constants.SIGN_UP_FAILED);
          break;
        case "901": // 아이디 중복
          await Swal.fire(Constants.ID_ALREADY_EXISTS);
          break;
        case "902": // 비밀번호 형식 오류
          await Swal.fire(Constants.PASSWORD_NOT_VALID);
          break;
        default: // 서버 에러
          await Swal.fire(Constants.SERVER_ERROR);
          break;
      }
    } catch (error) {
      const errorString = JSON.stringify(error, null, 2);
      console.log(errorString);
    }
  };
  const onClickSignUp = async () => {
    if (id.length === 0) {
      // 아이디가 비어있는 경우
      await Swal.fire(Constants.EMPTY_ID);
    } else if (password.length === 0) {
      // 비밀번호가 비어있는 경우
      await Swal.fire(Constants.EMPTY_PASSWORD);
    } else if (!validPassword) {
      // 비밀번호 형식이 올바르지 않은 경우
      await Swal.fire(Constants.PASSWORD_NOT_VALID);
    } else if (passwordConfirm.length === 0) {
      // 비밀번호 확인이 비어있는 경우
      await Swal.fire(Constants.EMPTY_PASSWORD_CONFIRMATION);
    } else if (password !== passwordConfirm) {
      // 비밀번호와 비밀번호 확인이 일치하지 않는 경우
      await Swal.fire(Constants.PASSWORD_NOT_MATCH);
    } else if (phoneNumber.length === 0) {
      // 전화번호가 비어있는 경우
      await Swal.fire(Constants.EMPTY_PHONE_NUMBER);
    } else if (!validPhoneNumber) {
      // 전화번호 형식이 올바르지 않은 경우
      await Swal.fire(Constants.PHONE_NUMBER_NOT_VALID);
    } else if (studentName.length === 0) {
      // 학생 이름이 비어있는 경우
      await Swal.fire(Constants.EMPTY_STUDENT_NAME);
    } else if (agreeStatus === false) {
      // 약관 동의가 되어있지 않은 경우
      await Swal.fire(Constants.TERMS_UNCHECKED);
    } else {
      // 모든 필드가 올바르게 입력된 경우
      await signUp();
    }
  };
  const onClickRegisterCoupon = async () => {
    if (coupon.length === 0) {
      // 쿠폰 코드가 비어있는 경우
      await Swal.fire(Constants.EMPTY_COUPON_CODE);
    } else {
      // 쿠폰 코드가 입력된 경우
      setCouponMessage("쿠폰이 등록되었습니다.");
      setCoupon("");
    }
  };
  return (
    <SignUpFieldsContainer>
      <RequiredFieldsNoticeText>* 표시 필수 입력</RequiredFieldsNoticeText>
      <RelativeContainer>
        <TextField
          id={"id"}
          value={id}
          onChange={(event) => setID(event.target.value)}
          variant={"outlined"}
          label={"아이디"}
          size={"medium"}
          sx={{
            width: "100%",
            backgroundColor: "white",
            borderRadius: 2,
            marginBottom: 1.5
          }}
        />
        {id.length === 0 && <AsteriskContainer>*</AsteriskContainer>}
      </RelativeContainer>
      <RelativeContainer>
        <TextField
          id={"password"}
          error={!validPassword}
          value={password}
          onChange={(event) => {
            if (!event.target.value.match(/\s/)) {
              // 공백을 입력하지 못하도록 합니다.
              setPassword(event.target.value);
            }
          }}
          variant={"outlined"}
          label={"비밀번호"}
          size={"medium"}
          type={"password"}
          sx={{
            width: "100%",
            backgroundColor: "white",
            borderRadius: 2,
            marginBottom: 1.5
          }}
        />
        {password.length === 0 && <AsteriskContainer>*</AsteriskContainer>}
      </RelativeContainer>
      <PasswordInfo />
      <RelativeContainer>
        <TextField
          id={"password-confirm"}
          error={password !== passwordConfirm || !validPassword}
          value={passwordConfirm}
          onChange={(event) => {
            if (!event.target.value.match(/\s/)) {
              // 공백을 입력하지 못하도록 합니다.
              setPasswordConfirm(event.target.value);
            }
          }}
          variant={"outlined"}
          label={"비밀번호 확인"}
          size={"medium"}
          type={"password"}
          sx={{
            width: "100%",
            backgroundColor: "white",
            borderRadius: 2,
            marginBottom: 1.5
          }}
        />
        {passwordConfirm.length === 0 && (
          <AsteriskContainer>*</AsteriskContainer>
        )}
      </RelativeContainer>
      <RelativeContainer>
        <TextField
          id={"phone-number"}
          error={!validPhoneNumber}
          value={phoneNumber}
          onChange={(event) => {
            if (event.target.value.match(/^[0-9]*$/)) {
              // 숫자만 입력 가능
              setPhoneNumber(event.target.value);
            }
          }}
          variant={"outlined"}
          label={"휴대폰 번호 (예: 01012345678)"}
          size={"medium"}
          type={"phone-number"}
          sx={{
            width: "100%",
            backgroundColor: "white",
            borderRadius: 2,
            marginBottom: 1.5
          }}
        />
        {phoneNumber.length === 0 && <AsteriskContainer>*</AsteriskContainer>}
      </RelativeContainer>
      <StudentLabel />
      <RelativeContainer>
        <TextField
          id={"student-name"}
          value={studentName}
          onChange={(event) => setStudentName(event.target.value)}
          variant={"outlined"}
          label={"학생(자녀) 이름"}
          size={"medium"}
          sx={{
            width: "100%",
            backgroundColor: "white",
            borderRadius: 2,
            marginBottom: 1.5
          }}
        />
        {studentName.length === 0 && <AsteriskContainer>*</AsteriskContainer>}
      </RelativeContainer>
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
      <CouponFieldContainer>
        <TextField
          id={"coupon"}
          value={coupon}
          onChange={(event) => setCoupon(event.target.value)}
          variant={"outlined"}
          label={"예) ########"}
          size={"medium"}
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
            height: 57,
            ":hover": {
              backgroundColor: "#222"
            }
          }}
        >
          등록
        </Button>
      </CouponFieldContainer>
      {couponMessage.length > 0 && (
        <CouponMessageText>{couponMessage}</CouponMessageText>
      )}
      <TermsContainer>
        <Checkbox
          checked={agreeStatus}
          onChange={(event) => setAgreeStatus(event.target.checked)}
        />
        <TermsText>이용약관 및 개인정보취급방침에 동의합니다. (필수)</TermsText>
      </TermsContainer>
      <Button
        variant={"contained"}
        onClick={onClickSignUp}
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
        회원가입
      </Button>
    </SignUpFieldsContainer>
  );
};

export default SignUpFields;
