import IntroductionHeader from "./IntroductionHeader";
import IntroductionContent from "./IntroductionContent/IntroductionContent";
import IntroductionPreviews from "./IntroductionPreviews/IntroductionPreviews";
import IntroductionCatalog from "./IntroductionCatalog/IntroductionCatalog";
import IntroductionTry from "./IntroductionTry/IntroductionTry";

const Introduction = () => {
  return (
    <div>
      <IntroductionHeader />
      <IntroductionContent />
      <IntroductionPreviews />
      <IntroductionCatalog />
      <IntroductionTry />
    </div>
  );
};

export default Introduction;
