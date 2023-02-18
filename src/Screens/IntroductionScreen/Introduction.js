import IntroductionHeader from "./IntroductionHeader";
import IntroductionContent from "./IntroductionContent/IntroductionContent";
import IntroductionPreviews from "./IntroductionPreviews/IntroductionPreviews";

const Introduction = () => {
  return (
    <div>
      <IntroductionHeader />
      <IntroductionContent />
      <IntroductionPreviews />
    </div>
  );
};

export default Introduction;
