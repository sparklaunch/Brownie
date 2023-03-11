import signInErrorMessageAtom from "../../../Stores/Auth/signInErrorMessage";
import { useRecoilValue } from "recoil";
import { SignInErrorMessageText } from "./SignInErrorMessageStyles";

const SignInErrorMessage = () => {
  const signInErrorMessage = useRecoilValue(signInErrorMessageAtom);
  return <SignInErrorMessageText>{signInErrorMessage}</SignInErrorMessageText>;
};

export default SignInErrorMessage;
