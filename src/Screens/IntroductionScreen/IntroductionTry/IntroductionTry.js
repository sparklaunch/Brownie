import IntroductionTryTitle from "./IntroductionTryTitle";
import IntroductionTryButton from "./IntroductionTryButton";
import IntroductionTryDevices from "./IntroductionTryDevices";

const IntroductionTry = () => {
  return (
    <div className={`flex flex-row justify-center bg-[#1AC573] p-[100px]`}>
      <div className={`w-[1200px] flex flex-row justify-between`}>
        <div>
          <IntroductionTryTitle />
          <IntroductionTryButton />
        </div>
        <IntroductionTryDevices />
      </div>
    </div>
  );
};

export default IntroductionTry;
