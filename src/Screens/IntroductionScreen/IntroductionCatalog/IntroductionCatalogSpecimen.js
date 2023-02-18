import TextbooksSpecimen from "./TextbooksSpecimen";
import FeatureSpecimen from "./FeatureSpecimen";

const IntroductionCatalogSpecimen = () => {
  return (
    <div className={`grid grid-cols-2`}>
      <TextbooksSpecimen />
      <FeatureSpecimen />
    </div>
  );
};

export default IntroductionCatalogSpecimen;
