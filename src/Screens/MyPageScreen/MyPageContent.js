import { useRecoilValue } from "recoil";
import myPageTabValueAtom from "../../Stores/MyPage/myPageTabValue";
import Status from "./Status/Status";
import AccountInformation from "./AccountInformation/AccountInformation";
import CouponManagement from "./CouponManagement/CouponManagement";

const MyPageContent = () => {
  const myPageTabValue = useRecoilValue(myPageTabValueAtom);
  switch (myPageTabValue) {
    case 0: // 학습 현황
      return <Status />;
    case 1: // 회원 정보
      return <AccountInformation />;
    case 2: // 쿠폰 관리
      return <CouponManagement />;
    default:
      break;
  }
};

export default MyPageContent;
