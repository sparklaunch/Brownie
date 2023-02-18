import TextbooksSpecimen from "./TextbooksSpecimen";
import FeatureSpecimen from "./FeatureSpecimen";

const IntroductionCatalogSpecimen = () => {
  return (
    <div className={`w-full flex flex-row justify-around`}>
      <TextbooksSpecimen />
      <FeatureSpecimen />
    </div>
  );
};

export default IntroductionCatalogSpecimen;
