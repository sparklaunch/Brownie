import IntroductionContentTitle from "./IntroductionContentTitle";
import IntroductionContentFeatures from "./IntroductionContentFeatures";

const IntroductionContent = () => {
  return (
    <div
      className={`flex flex-row justify-center bg-[#F9F9F9] p-[80px] border-t-[1px] border-b-[1px] border-[#DFDFDF]`}
    >
      <div className={`w-[1200px] flex flex-col items-center`}>
        <IntroductionContentTitle />
        <IntroductionContentFeatures />
      </div>
    </div>
  );
};

export default IntroductionContent;
