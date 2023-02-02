import CircleIcon from "@mui/icons-material/Circle";
import WarningIcon from "@mui/icons-material/Warning";

const StatusLabels = () => {
  return (
    <div className={`flex flex-row justify-end`}>
      <div className={`flex flex-row items-center`}>
        <CircleIcon
          fontSize={"small"}
          sx={{
            fill: "#00AEA8"
          }}
        />
        <p className={`text-[16px] ml-2`}>학습 완료</p>
      </div>
      <div className={`flex flex-row items-center ml-3`}>
        <WarningIcon
          fontSize={"small"}
          sx={{
            fill: "#FF8200"
          }}
        />
        <p className={`text-[16px] ml-2`}>학습 진행중</p>
      </div>
    </div>
  );
};

export default StatusLabels;
