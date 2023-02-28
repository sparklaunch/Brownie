import FormBackground from "../FormBackground";
import FormHeader from "./FormHeader";
import FormFields from "./FormFields";
import FormFooter from "./FormFooter";
import {
  FormContainer,
  SignInFormInnerContainer,
  SignInFormOuterContainer
} from "./SignInFormStyles";

const SignInForm = () => {
  return (
    <SignInFormOuterContainer>
      <SignInFormInnerContainer>
        <FormBackground />
        <FormContainer>
          <FormHeader />
          <FormFields />
          <FormFooter />
        </FormContainer>
      </SignInFormInnerContainer>
    </SignInFormOuterContainer>
  );
};

export default SignInForm;
