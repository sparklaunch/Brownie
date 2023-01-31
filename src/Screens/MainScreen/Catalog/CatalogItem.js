import CatalogLabel from "./CatalogLabel";
import CatalogTitle from "./CatalogTitle";

const CatalogItem = ({ coverImage, data }) => {
  return (
    <div className={`relative drop-shadow-lg`}>
      <img
        loading={"lazy"}
        src={`/assets/images/covers/${coverImage}`}
        alt={`${coverImage}`}
        className={`h-[288px] w-full object-cover cursor-pointer rounded-lg hover:opacity-60 transition duration-200 ease-in-out`}
      />
      <CatalogLabel label={coverImage.split(".avif")[0]} />
      <CatalogTitle data={data} />
    </div>
  );
};

export default CatalogItem;
