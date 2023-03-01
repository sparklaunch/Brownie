import signInErrorMessageAtom from "../../../Stores/Auth/signInErrorMessage";
import { useRecoilState } from "recoil";
import { SignInErrorMessageText } from "./SignInErrorMessageStyles";

const SignInErrorMessage = () => {
  const [signInErrorMessage, setSignInErrorMessage] = useRecoilState(
    signInErrorMessageAtom
  );
  return <SignInErrorMessageText>{signInErrorMessage}</SignInErrorMessageText>;
};

export default SignInErrorMessage;
