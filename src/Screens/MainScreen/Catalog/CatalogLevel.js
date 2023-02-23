import CatalogItem from "./CatalogItem";
import {
  CatalogLevelContainer,
  CatalogLevelGridContainer,
  CatalogLevelLabel,
  CatalogLevelLabelContainer
} from "./CatalogLevelStyles";

const CatalogLevel = ({ level, maxUnit, data }) => {
  const coverImages = Array.from(Array(maxUnit).keys()).map((unit) => {
    return `${level}-${unit + 1}.jpg`;
  });
  return (
    <CatalogLevelContainer>
      <CatalogLevelLabelContainer>
        <img
          src={"assets/images/icons/snowflake_icon.svg"}
          alt={"Snowflake Icon"}
          className={`w-[14px] h-[14px]`}
        />
        <CatalogLevelLabel>Level {level}</CatalogLevelLabel>
      </CatalogLevelLabelContainer>
      <CatalogLevelGridContainer>
        {coverImages.map((coverImage, index) => {
          return (
            <CatalogItem
              coverImage={coverImage}
              data={data[index]}
              key={index}
              forDemo={
                coverImage.replace(".jpg", "") === `1-1` ||
                coverImage.replace(".jpg", "") === `2-1`
              }
            />
          );
        })}
      </CatalogLevelGridContainer>
    </CatalogLevelContainer>
  );
};

export default CatalogLevel;
