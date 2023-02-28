import CouponHistoryItem from "./CouponHistoryItem";
import { CouponHistoryItemsContainer } from "./CouponHistoryItemsStyles";

const CouponHistoryItems = () => {
  return (
    <CouponHistoryItemsContainer>
      <CouponHistoryItem />
      <CouponHistoryItem used={true} />
      <CouponHistoryItem used={true} />
    </CouponHistoryItemsContainer>
  );
};

export default CouponHistoryItems;
