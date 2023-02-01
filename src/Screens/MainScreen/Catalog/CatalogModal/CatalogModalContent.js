import TextBookLabel from "./TextBookLabel";
import TextBookInformation from "./TextBookInformation";

const CatalogModalContent = () => {
  return (
    <div className={`p-5`}>
      <TextBookLabel />
      <TextBookInformation />
    </div>
  );
};

export default CatalogModalContent;
