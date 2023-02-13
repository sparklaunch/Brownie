const CouponHistoryItem = () => {
  return (
    <div className={`p-6 border-2 border-[#DFDFDF] rounded-lg`}>
      <p className={`text-[515151] text-[16px] mb-1`}>쿠폰코드</p>
      <p className={`text-[22px] text-[#F34D7E] font-bold mb-5`}>
        A001 23 E01 06 0001
      </p>
      <p className={`text-[515151] text-[13px]`}>2023.01.01 00:23 부터</p>
      <p className={`text-[515151] text-[13px] font-bold`}>
        2023.03.30 00:00 까지
      </p>
    </div>
  );
};

export default CouponHistoryItem;
