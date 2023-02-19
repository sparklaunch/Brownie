import { Button } from "@mui/material";
import GridViewIcon from "./GridViewIcon";
import ListViewIcon from "./ListViewIcon";
import { CatalogFilterContainer } from "./CatalogFilterStyles";

const CatalogFilter = () => {
  return (
    <CatalogFilterContainer>
      <Button
        variant={"outlined"}
        sx={{
          fontFamily: "Jua",
          fontSize: "18px",
          marginRight: "16px",
          color: "#F34D7E",
          borderWidth: 2,
          borderColor: "#F34D7E",
          ":hover": {
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: "#F34D7E"
          }
        }}
      >
        도서 레벨 확인
      </Button>
      <GridViewIcon />
      <ListViewIcon />
    </CatalogFilterContainer>
  );
};

export default CatalogFilter;
