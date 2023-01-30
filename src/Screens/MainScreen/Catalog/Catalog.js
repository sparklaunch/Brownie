import CatalogHeader from "./CatalogHeader";
import CatalogFilter from "./CatalogFilter";

const Catalog = () => {
  return (
    <div className={`flex justify-center`}>
      <div className={`w-[1200px]`}>
        <CatalogHeader />
        <CatalogFilter />
      </div>
    </div>
  );
};

export default Catalog;
