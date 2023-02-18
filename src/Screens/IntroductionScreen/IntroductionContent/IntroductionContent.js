import IntroductionContentTitle from "./IntroductionContentTitle";

const IntroductionContent = () => {
  return (
    <div className={`flex flex-row justify-center bg-[#F9F9F9] p-[80px]`}>
      <div className={`w-[1200px] flex flex-row justify-center`}>
        <IntroductionContentTitle />
      </div>
    </div>
  );
};

export default IntroductionContent;
