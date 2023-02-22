import FormBackground from "../FormBackground";
import FormHeader from "./FormHeader";
import FormFields from "./FormFields";
import FormFooter from "./FormFooter";

const SignInForm = () => {
  return (
    <div className={`drop-shadow-2xl`}>
      <div className={`w-[300px] h-[320px] rounded-lg overflow-clip relative`}>
        <FormBackground />
        <div
          className={`p-[16px] z-[1] absolute top-0 left-0 bottom-0 right-0`}
        >
          <FormHeader />
          <FormFields />
          <FormFooter />
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
