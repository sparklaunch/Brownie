import TextBookLabel from "./TextBookLabel";
import TextBookInformation from "./TextBookInformation";
import TextBookFields from "./TextBookFields";

const CatalogModalContent = () => {
  return (
    <div className={`p-5`}>
      <TextBookLabel />
      <TextBookInformation />
      <TextBookFields />
    </div>
  );
};

export default CatalogModalContent;
