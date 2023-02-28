import CouponHistoryItems from "./CouponHistoryItems";
import {
  CouponHistoryContainer,
  CouponHistoryText
} from "./CouponHistoryStyles";

const CouponHistory = () => {
  return (
    <CouponHistoryContainer>
      <CouponHistoryText>쿠폰 사용 내역 확인</CouponHistoryText>
      <CouponHistoryItems />
    </CouponHistoryContainer>
  );
};

export default CouponHistory;
