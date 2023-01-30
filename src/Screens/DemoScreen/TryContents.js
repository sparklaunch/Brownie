import CatalogItem from "../MainScreen/Catalog/CatalogItem";
import { Grid } from "@mui/material";

const TryContents = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CatalogItem
            coverImage={"1-1.avif"}
            data={{
              level: "1-1",
              title: "Ant, Bug and Cat"
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <CatalogItem
            coverImage={"2-1.avif"}
            data={{
              level: "2-1",
              title: "Dan and the Ram"
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default TryContents;
