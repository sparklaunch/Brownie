import selectedCatalogAtom from "../../../../Stores/Catalog/selectedCatalog";
import { useRecoilState } from "recoil";

const TextBookInformation = () => {
  const [selectedCatalog, setSelectedCatalog] =
    useRecoilState(selectedCatalogAtom);
  return (
    <div className={`flex flex-row`}>
      <img
        src={`/assets/images/covers/${selectedCatalog.label}.jpg`}
        alt={`${selectedCatalog.label}`}
        className={`w-[120px] h-[120px] object-cover rounded-xl`}
      />
      <div className={`ml-2 flex flex-col flex-grow-[1]`}>
        <p className={`w-[100%] pl-5 py-1 mb-2 bg-[#F5F5F5] rounded-md block`}>
          e-future Classic Readers {selectedCatalog.label}
        </p>
        <p className={`w-[100%] pl-5 py-1 bg-[#F5F5F5] rounded-md block`}>
          {selectedCatalog.title}
        </p>
      </div>
    </div>
  );
};

export default TextBookInformation;
