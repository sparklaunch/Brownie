import CouponHistoryItem from "./CouponHistoryItem";

const CouponHistoryItems = () => {
  return (
    <div className={`grid grid-cols-4 gap-3`}>
      <CouponHistoryItem />
      <CouponHistoryItem />
      <CouponHistoryItem />
    </div>
  );
};

export default CouponHistoryItems;
