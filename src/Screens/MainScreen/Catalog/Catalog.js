import CatalogHeader from "./CatalogHeader";
import CatalogFilter from "./CatalogFilter";
import CatalogList from "./CatalogList";

const Catalog = () => {
  return (
    <div className={`flex justify-center`}>
      <div className={`w-[1200px]`}>
        <CatalogHeader />
        <CatalogFilter />
        <CatalogList />
      </div>
    </div>
  );
};

export default Catalog;
