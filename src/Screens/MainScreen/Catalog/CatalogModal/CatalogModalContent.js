import selectedCatalogAtom from "../../../../Stores/Catalog/selectedCatalog";
import { useRecoilState } from "recoil";
import TextBookLabel from "./TextBookLabel";

const CatalogModalContent = () => {
  const [selectedCatalog, setSelectedCatalog] =
    useRecoilState(selectedCatalogAtom);
  return (
    <div className={`p-5`}>
      <TextBookLabel />
    </div>
  );
};

export default CatalogModalContent;
