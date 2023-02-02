import MyInformation from "./MyInformation";
import HistoryGraph from "./HistoryGraph";

const Status = () => {
  return (
    <div className={`flex flex-row justify-center`}>
      <div className={`w-[1200px]`}>
        <div className={`grid grid-cols-2 gap-5`}>
          <MyInformation />
          <HistoryGraph />
        </div>
      </div>
    </div>
  );
};

export default Status;
