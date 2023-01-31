import SignUpHeader from "./SignUpHeader";
import SignUpFields from "./SignUpFields";

const SignUpForm = () => {
  return (
    <div className={`bg-[#F9F9F9] p-5`}>
      <SignUpHeader />
      <SignUpFields />
    </div>
  );
};

export default SignUpForm;
