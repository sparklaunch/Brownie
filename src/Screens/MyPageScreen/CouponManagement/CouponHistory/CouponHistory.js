import CouponHistoryItems from "./CouponHistoryItems";

const CouponHistory = () => {
  return (
    <div className={`mb-12`}>
      <p className={`border-l-4 border-[#00AEA8] pl-3 mb-3 text-[20px]`}>
        쿠폰 사용 내역 확인
      </p>
      <CouponHistoryItems />
    </div>
  );
};

export default CouponHistory;
