import SignInHeader from "./SignInHeader";
import SignInFields from "./SignInFields";
import SignInFindAccount from "./SignInFindAccount";

const SignInForm = () => {
  return (
    <div className={`bg-[#F9F9F9] p-5`}>
      <SignInHeader />
      <SignInFields />
      <SignInFindAccount />
    </div>
  );
};

export default SignInForm;
