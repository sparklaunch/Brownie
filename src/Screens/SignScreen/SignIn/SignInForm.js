import SignInHeader from "./SignInHeader";
import SignInFields from "./SignInFields";
import SignInFindAccount from "./SignInFindAccount";
import { SignInFormContainer } from "./SignInFormStyles";

const SignInForm = () => {
  return (
    <SignInFormContainer>
      <SignInHeader />
      <SignInFields />
      <SignInFindAccount />
    </SignInFormContainer>
  );
};

export default SignInForm;
