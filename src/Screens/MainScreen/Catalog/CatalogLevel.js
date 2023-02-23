import { Grid } from "@mui/material";
import CatalogItem from "./CatalogItem";
import {
  CatalogLevelContainer,
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
      <Grid container spacing={2}>
        {coverImages.map((coverImage, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={coverImage}>
              <CatalogItem
                coverImage={coverImage}
                data={data[index]}
                forDemo={
                  coverImage.replace(".jpg", "") === `1-1` ||
                  coverImage.replace(".jpg", "") === `2-1`
                }
              />
            </Grid>
          );
        })}
      </Grid>
    </CatalogLevelContainer>
  );
};

export default CatalogLevel;
