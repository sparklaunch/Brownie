import MyInformation from "./MyInformation";
import HistoryGraph from "./HistoryGraph";
import RecentlyReadBooks from "./RecentlyReadBooks";
import Footer from "../../MainScreen/Footer/Footer";

const Status = () => {
  return (
    <div>
      <div className={`flex flex-row justify-center`}>
        <div className={`w-[1200px]`}>
          <div className={`grid grid-cols-2 gap-5 mb-8`}>
            <MyInformation />
            <HistoryGraph />
          </div>
          <RecentlyReadBooks />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Status;
