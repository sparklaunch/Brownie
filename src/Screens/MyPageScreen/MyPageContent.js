import { useRecoilState } from "recoil";
import myPageTabValueAtom from "../../Stores/MyPage/myPageTabValue";
import Status from "./Status/Status";
import AccountInformation from "./AccountInformation/AccountInformation";
import CouponManagement from "./CouponManagement/CouponManagement";

const MyPageContent = () => {
  const [myPageTabValue, setMyPageTabValue] =
    useRecoilState(myPageTabValueAtom);
  switch (myPageTabValue) {
    case 0:
      return <Status />;
    case 1:
      return <AccountInformation />;
    case 2:
      return <CouponManagement />;
    default:
      break;
  }
};

export default MyPageContent;
