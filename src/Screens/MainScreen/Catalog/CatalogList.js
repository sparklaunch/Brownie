import CatalogLevel from "./CatalogLevel";

const CatalogList = () => {
  return (
    <div>
      <CatalogLevel level={1} />
      <CatalogLevel level={2} />
      <CatalogLevel level={3} />
      <CatalogLevel level={4} />
      <CatalogLevel level={5} />
    </div>
  );
};

export default CatalogList;
