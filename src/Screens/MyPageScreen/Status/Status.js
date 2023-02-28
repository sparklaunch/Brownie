import MyInformation from "./MyInformation";
import HistoryGraph from "./HistoryGraph";
import RecentlyReadBooks from "./RecentlyReadBooks";
import Footer from "../../MainScreen/Footer/Footer";
import {
  StatusContainer,
  StatusInnerContainer,
  StatusOuterContainer
} from "./StatusStyles";

const Status = () => {
  return (
    <>
      <StatusOuterContainer>
        <StatusInnerContainer>
          <StatusContainer>
            <MyInformation />
            <HistoryGraph />
          </StatusContainer>
          <RecentlyReadBooks />
        </StatusInnerContainer>
      </StatusOuterContainer>
      <Footer />
    </>
  );
};

export default Status;
