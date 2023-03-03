import {
  FindIDLink,
  FindPasswordLink,
  SignInFindAccountContainer
} from "./SignInFindAccountStyles";

const SignInFindAccount = () => {
  // const navigate = useNavigate();
  // const onClickFindID = () => {
  //   navigate("/find-id");
  // };
  // const onClickFindPassword = () => {
  //   navigate("/find-password");
  // };
  return (
    <SignInFindAccountContainer>
      <FindIDLink>아이디 찾기</FindIDLink>
      <FindPasswordLink>비밀번호 찾기</FindPasswordLink>
    </SignInFindAccountContainer>
  );
};

export default SignInFindAccount;
