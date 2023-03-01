import SignUpHeader from "./SignUpHeader";
import SignUpFields from "./SignUpFields";
import { SignUpFormContainer } from "./SignUpFormStyles";

const SignUpForm = () => {
  return (
    <SignUpFormContainer>
      <SignUpHeader />
      <SignUpFields />
    </SignUpFormContainer>
  );
};

export default SignUpForm;
