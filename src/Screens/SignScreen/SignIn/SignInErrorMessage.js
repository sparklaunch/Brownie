import signInErrorMessageAtom from "../../../Stores/Auth/signInErrorMessage";
import { useRecoilState } from "recoil";

const SignInErrorMessage = () => {
  const [signInErrorMessage, setSignInErrorMessage] = useRecoilState(
    signInErrorMessageAtom
  );
  return (
    <div>
      <p className={`text-[#EC1C47] text-[13px]`}>{signInErrorMessage}</p>
    </div>
  );
};

export default SignInErrorMessage;
