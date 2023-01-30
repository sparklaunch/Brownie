const CatalogItem = ({ coverImage }) => {
  return (
    <div>
      <img
        loading={"lazy"}
        src={`/assets/images/covers/${coverImage}`}
        alt={`${coverImage}`}
      />
    </div>
  );
};

export default CatalogItem;
