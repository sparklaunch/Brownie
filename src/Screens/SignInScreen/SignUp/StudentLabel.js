import CircleIcon from "@mui/icons-material/Circle";

const StudentLabel = () => {
  return (
    <div className={`flex flex-row items-center mb-1`}>
      <CircleIcon
        sx={{
          width: "10px",
          height: "10px",
          fill: "#1AB9C5"
        }}
      />
      <p className={`ml-3 text-[18px]`}>학생(자녀) 정보</p>
    </div>
  );
};

export default StudentLabel;
