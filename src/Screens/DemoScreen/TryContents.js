import CatalogItem from "../MainScreen/Catalog/CatalogItem";
import { Grid } from "@mui/material";
import {
  TryContentsInnerContainer,
  TryContentsOuterContainer
} from "./TryContentsStyles";

const TryContents = () => {
  return (
    <TryContentsOuterContainer>
      <TryContentsInnerContainer>
        <Grid container spacing={20}>
          <Grid item xs={6}>
            <CatalogItem
              coverImage={"1-1.jpg"}
              data={{
                level: "1-1",
                title: "Ant, Bug and Cat"
              }}
              clickable={false}
              forDemo={true}
            />
          </Grid>
          <Grid item xs={6}>
            <CatalogItem
              coverImage={"2-1.jpg"}
              data={{
                level: "2-1",
                title: "Dan and the Ram"
              }}
              clickable={false}
              forDemo={true}
            />
          </Grid>
        </Grid>
      </TryContentsInnerContainer>
    </TryContentsOuterContainer>
  );
};

export default TryContents;
