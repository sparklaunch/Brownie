import FormHeader from "./FormHeader";
import FormBackground from "./FormBackground";
import FormFields from "./FormFields";
import FormFooter from "./FormFooter";

const JumbotronForm = () => {
  return (
    <div
      className={`w-[300px] h-[360px] rounded-lg shadow-2xl overflow-clip relative`}
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

export default JumbotronForm;
