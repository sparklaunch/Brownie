import IntroductionTryTitle from "./IntroductionTryTitle";
import IntroductionTryButton from "./IntroductionTryButton";
import IntroductionTryDevices from "./IntroductionTryDevices";

const IntroductionTry = () => {
  return (
    <div
      className={`flex flex-row justify-center bg-[#1AC573] p-[100px] overflow-clip`}
    >
      <div className={`w-[1200px] flex flex-row justify-between items-end`}>
        <div className={`flex-shrink-0`}>
          <IntroductionTryTitle />
          <IntroductionTryButton />
        </div>
        <div>
          <IntroductionTryDevices />
        </div>
      </div>
    </div>
  );
};

export default IntroductionTry;
