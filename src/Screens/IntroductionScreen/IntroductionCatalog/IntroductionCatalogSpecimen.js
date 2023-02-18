import TextbooksSpecimen from "./TextbooksSpecimen";
import FeatureSpecimen from "./FeatureSpecimen";

const IntroductionCatalogSpecimen = () => {
  return (
    <div className={`flex flex-row justify-around`}>
      <TextbooksSpecimen />
      <FeatureSpecimen />
    </div>
  );
};

export default IntroductionCatalogSpecimen;
