import { Grid } from "@mui/material";
import CatalogItem from "./CatalogItem";

const CatalogLevel = ({ level, maxUnit }) => {
  // array of length maxUnit
  const coverImages = Array.from(Array(maxUnit).keys()).map((unit) => {
    return `${level}-${unit + 1}.avif`;
  });
  return (
    <div>
      <Grid container spacing={2}>
        {coverImages.map((coverImage) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={coverImage}>
              <CatalogItem coverImage={coverImage} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default CatalogLevel;
