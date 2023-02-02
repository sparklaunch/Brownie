const CouponCautionDetail = () => {
  return (
    <div>
      <div className={`flex flex-row items-center justify-center my-2`}>
        <img src={"assets/images/icons/check_icon.svg"} alt={"Check Icon"} />
        <p className={`text-[16px] text-[#707070] ml-3`}>
          유효기간이 지난 쿠폰은 등록 및 사용될 수 없습니다.
        </p>
      </div>
      <div className={`flex flex-row items-center justify-center my-2`}>
        <img src={"assets/images/icons/check_icon.svg"} alt={"Check Icon"} />
        <p className={`text-[16px] text-[#707070] ml-3`}>
          쿠폰은 ID에 귀속되며, 이미 입력된 쿠폰은 재등록이 불가합니다.
        </p>
      </div>
    </div>
  );
};

export default CouponCautionDetail;
