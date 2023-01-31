import SignInHeader from "./SignInHeader";
import SignInFields from "./SignInFields";

const SignInForm = () => {
  return (
    <div className={`bg-[#F9F9F9] p-5`}>
      <SignInHeader />
      <SignInFields />
    </div>
  );
};

export default SignInForm;
