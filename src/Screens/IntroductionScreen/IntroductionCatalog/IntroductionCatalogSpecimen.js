import TextbooksSpecimen from "./TextbooksSpecimen";
import FeatureSpecimen from "./FeatureSpecimen";
import { IntroductionCatalogSpecimenContainer } from "./IntroductionCatalogSpecimenStyles";

const IntroductionCatalogSpecimen = () => {
  return (
    <IntroductionCatalogSpecimenContainer>
      <TextbooksSpecimen />
      <FeatureSpecimen />
    </IntroductionCatalogSpecimenContainer>
  );
};

export default IntroductionCatalogSpecimen;
