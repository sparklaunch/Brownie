import CatalogLabel from "./CatalogLabel";

const CatalogItem = ({ coverImage }) => {
  return (
    <div className={`relative`}>
      <img
        loading={"lazy"}
        src={`/assets/images/covers/${coverImage}`}
        alt={`${coverImage}`}
        className={`h-[288px] w-full object-cover rounded-lg`}
      />
      <CatalogLabel label={coverImage.split(".avif")[0]} />
    </div>
  );
};

export default CatalogItem;
