import CatalogLevel from "./CatalogLevel";

const CatalogList = () => {
  return (
    <div>
      <CatalogLevel level={1} maxUnit={8} />
      <CatalogLevel level={2} maxUnit={5} />
      <CatalogLevel level={3} maxUnit={4} />
      <CatalogLevel level={4} maxUnit={4} />
      <CatalogLevel level={5} maxUnit={4} />
    </div>
  );
};

export default CatalogList;
