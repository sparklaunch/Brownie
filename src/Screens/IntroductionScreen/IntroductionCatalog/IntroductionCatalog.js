import IntroductionCatalogTitle from "./IntroductionCatalogTitle";
import IntroductionCatalogSpecimen from "./IntroductionCatalogSpecimen";
import {
  IntroductionCatalogInnerContainer,
  IntroductionCatalogOuterContainer
} from "./IntroductionCatalogStyles";

const IntroductionCatalog = () => {
  return (
    <IntroductionCatalogOuterContainer>
      <IntroductionCatalogInnerContainer>
        <IntroductionCatalogTitle />
        <IntroductionCatalogSpecimen />
      </IntroductionCatalogInnerContainer>
    </IntroductionCatalogOuterContainer>
  );
};

export default IntroductionCatalog;
