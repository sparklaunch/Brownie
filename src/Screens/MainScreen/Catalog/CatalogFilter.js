import { Button } from "@mui/material";
import GridViewIcon from "./GridViewIcon";
import ListViewIcon from "./ListViewIcon";

const CatalogFilter = () => {
  return (
    <div className={`flex flex-row items-center justify-end`}>
      <Button
        variant={"outlined"}
        sx={{
          fontFamily: "Jua",
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
    </div>
  );
};

export default CatalogFilter;
