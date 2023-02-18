import IntroductionTryTitle from "./IntroductionTryTitle";
import IntroductionTryButton from "./IntroductionTryButton";

const IntroductionTry = () => {
  return (
    <div className={`flex flex-row justify-center bg-[#1AC573] p-[100px]`}>
      <div className={`w-[1200px]`}>
        <IntroductionTryTitle />
        <IntroductionTryButton />
      </div>
    </div>
  );
};

export default IntroductionTry;
