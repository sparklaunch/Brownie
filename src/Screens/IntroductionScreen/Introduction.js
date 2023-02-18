import IntroductionHeader from "./IntroductionHeader";
import IntroductionContent from "./IntroductionContent/IntroductionContent";
import IntroductionPreviews from "./IntroductionPreviews/IntroductionPreviews";
import IntroductionCatalog from "./IntroductionCatalog/IntroductionCatalog";

const Introduction = () => {
  return (
    <div>
      <IntroductionHeader />
      <IntroductionContent />
      <IntroductionPreviews />
      <IntroductionCatalog />
    </div>
  );
};

export default Introduction;
