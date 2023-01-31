import CatalogItem from "../MainScreen/Catalog/CatalogItem";
import { Grid } from "@mui/material";

const TryContents = () => {
  return (
    <div className={`flex flex-row justify-center my-12`}>
      <div className={`w-[600px]`}>
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
    </div>
  );
};

export default TryContents;
