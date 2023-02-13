import CouponHistoryItem from "./CouponHistoryItem";

const CouponHistoryItems = () => {
  return (
    <div className={`grid grid-cols-4 gap-3`}>
      <CouponHistoryItem />
      <CouponHistoryItem used={true} />
      <CouponHistoryItem used={true} />
    </div>
  );
};

export default CouponHistoryItems;
