import IntroductionHeader from "./IntroductionHeader";
import IntroductionContent from "./IntroductionContent/IntroductionContent";
import IntroductionPreviews from "./IntroductionPreviews/IntroductionPreviews";
import IntroductionCatalog from "./IntroductionCatalog/IntroductionCatalog";
import IntroductionTry from "./IntroductionTry/IntroductionTry";
import Footer from "../MainScreen/Footer/Footer";

const Introduction = () => {
  return (
    <>
      <IntroductionHeader />
      <IntroductionContent />
      <IntroductionPreviews />
      <IntroductionCatalog />
      <IntroductionTry />
      <Footer />
    </>
  );
};

export default Introduction;
