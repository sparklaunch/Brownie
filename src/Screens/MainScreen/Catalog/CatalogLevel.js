import { Grid } from "@mui/material";
import CatalogItem from "./CatalogItem";

const CatalogLevel = ({ level, maxUnit, data }) => {
  const coverImages = Array.from(Array(maxUnit).keys()).map((unit) => {
    return `${level}-${unit + 1}.jpg`;
  });
  return (
    <div className={`mb-8`}>
      <div className={`flex flex-row items-center mb-2`}>
        <img
          src={"assets/images/icons/snowflake_icon.svg"}
          alt={"Snowflake Icon"}
        />
        <p className={`font-[Jua] text-[20px] ml-2`}>Level {level}</p>
      </div>
      <Grid container spacing={2}>
        {coverImages.map((coverImage, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={coverImage}>
              <CatalogItem coverImage={coverImage} data={data[index]} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default CatalogLevel;
