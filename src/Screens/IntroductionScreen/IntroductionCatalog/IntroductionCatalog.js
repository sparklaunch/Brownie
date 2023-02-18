import IntroductionCatalogTitle from "./IntroductionCatalogTitle";
import IntroductionCatalogSpecimen from "./IntroductionCatalogSpecimen";

const IntroductionCatalog = () => {
  return (
    <div
      className={`flex flex-row justify-center p-[120px] bg-[#F4FEFF] border-t-[1px] border-b-[1px] border-[#1AB9C5]`}
    >
      <div className={`w-[1200px] flex flex-col items-center`}>
        <IntroductionCatalogTitle />
        <IntroductionCatalogSpecimen />
      </div>
    </div>
  );
};

export default IntroductionCatalog;
