import selectedCatalogAtom from "../../../../Stores/Catalog/selectedCatalog";
import { useRecoilState } from "recoil";

const CatalogModalContent = () => {
  const [selectedCatalog, setSelectedCatalog] =
    useRecoilState(selectedCatalogAtom);
  return <div></div>;
};

export default CatalogModalContent;
