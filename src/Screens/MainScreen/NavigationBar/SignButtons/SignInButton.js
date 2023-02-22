import { useRecoilState } from "recoil";
import tabValueAtom from "../../../../Stores/Auth/tabValue";
import { useNavigate } from "react-router-dom";
import { NavigationBarSignInButton } from "./SignInButtonStyles";

const SignInButton = () => {
  const [tabValue, setTabValue] = useRecoilState(tabValueAtom);
  const navigate = useNavigate();
  const onClickSignIn = () => {
    setTabValue(0);
    navigate("/signin");
  };
  return (
    <NavigationBarSignInButton onClick={onClickSignIn}>
      로그인
    </NavigationBarSignInButton>
  );
};

export default SignInButton;
