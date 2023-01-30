import ViewListIcon from "@mui/icons-material/ViewList";

const ListViewIcon = () => {
  return (
    <div
      className={`w-[40px] h-[40px] flex justify-center items-center border-2 border-[#DFDFDF] border-solid rounded-md cursor-pointer`}
    >
      <ViewListIcon
        fontSize={"medium"}
        sx={{
          fill: "#707070"
        }}
      />
    </div>
  );
};

export default ListViewIcon;
