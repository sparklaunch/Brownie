import { Grid } from "@mui/material";
import CatalogItem from "./CatalogItem";
import FlareIcon from "@mui/icons-material/Flare";

const CatalogLevel = ({ level, maxUnit, data }) => {
  const coverImages = Array.from(Array(maxUnit).keys()).map((unit) => {
    return `${level}-${unit + 1}.jpg`;
  });
  return (
    <div className={`mb-8`}>
      <div className={`flex flex-row items-center mb-2`}>
        <FlareIcon
          sx={{
            fontSize: 14,
            fill: "red"
          }}
        />
        <p className={`font-[Jua] ml-2`}>Level {level}</p>
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
