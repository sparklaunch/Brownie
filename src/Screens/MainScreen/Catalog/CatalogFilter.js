import { Button } from "@mui/material";
import GridViewIcon from "./GridViewIcon";
import ListViewIcon from "./ListViewIcon";

const CatalogFilter = () => {
  return (
    <div className={`flex flex-row items-center justify-end`}>
      <Button
        variant={"outlined"}
        color={"error"}
        sx={{
          fontFamily: "Jua",
          marginRight: "16px"
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
