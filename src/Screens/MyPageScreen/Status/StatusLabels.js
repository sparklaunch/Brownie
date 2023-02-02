import CircleIcon from "@mui/icons-material/Circle";

const StatusLabels = () => {
  return (
    <div>
      <div className={`flex flex-row items-center`}>
        <CircleIcon
          fontSize={"small"}
          sx={{
            fill: "#00AEA8"
          }}
        />
        <p className={`text-[16px] ml-2`}>학습 완료</p>
      </div>
    </div>
  );
};

export default StatusLabels;
