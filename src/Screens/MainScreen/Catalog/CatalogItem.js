const CatalogItem = ({ coverImage }) => {
  return (
    <div>
      <img
        loading={"lazy"}
        src={`/assets/images/covers/${coverImage}`}
        alt={`${coverImage}`}
        className={`h-[288px] w-full object-cover rounded-lg`}
      />
    </div>
  );
};

export default CatalogItem;
