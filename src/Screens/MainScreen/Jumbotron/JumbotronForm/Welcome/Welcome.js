import FormBackground from "../FormBackground";
import FormHeader from "../SignInForm/FormHeader";
import FormFields from "../SignInForm/FormFields";
import FormFooter from "../SignInForm/FormFooter";

const Welcome = () => {
  return (
    <div
      className={`w-[300px] h-[320px] rounded-lg shadow-2xl overflow-clip relative`}
    >
      <FormBackground />
      <div className={`p-[16px] z-[1] absolute top-0 left-0 bottom-0 right-0`}>
        <FormHeader />
        <FormFields />
        <FormFooter />
      </div>
    </div>
  );
};

export default Welcome;
