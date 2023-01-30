import WindowIcon from "@mui/icons-material/Window";

const GridViewIcon = () => {
  return (
    <div
      className={`w-[40px] h-[40px] flex justify-center items-center border-2 border-[#DFDFDF] border-solid rounded-md cursor-pointer mr-[5px]`}
    >
      <WindowIcon
        fontSize={"medium"}
        sx={{
          fill: "#707070"
        }}
      />
    </div>
  );
};

export default GridViewIcon;
