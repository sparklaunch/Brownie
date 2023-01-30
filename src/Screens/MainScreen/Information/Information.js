import EvaluationMethod from "./EvaluationMethod";
import Caution from "./Caution";

const Information = () => {
  return (
    <div className={`flex flex-row justify-center`}>
      <div className={`w-[1200px] py-16`}>
        <EvaluationMethod />
        <Caution />
      </div>
    </div>
  );
};

export default Information;
