const CouponHistoryItem = ({ used = false }) => {
  return (
    <div
      className={`relative border-2 border-[#DFDFDF] rounded-lg overflow-clip`}
    >
      <div className={`p-6`}>
        <p className={`text-[515151] text-[16px] mb-1`}>쿠폰코드</p>
        <p className={`text-[22px] text-[#F34D7E] font-bold mb-5`}>
          A001 23 E01 06 0001
        </p>
        <p className={`text-[515151] text-[13px]`}>2023.01.01 00:23 부터</p>
        <p className={`text-[515151] text-[13px] font-bold`}>
          2023.03.30 00:00 까지
        </p>
      </div>
      {used && (
        <div
          className={`absolute top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-center bg-black opacity-50`}
        >
          <p className={`text-white font-[Jua] text-[28px]`}>사용완료</p>
        </div>
      )}
    </div>
  );
};

export default CouponHistoryItem;
