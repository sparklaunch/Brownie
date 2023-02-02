const CouponLabel = () => {
  return (
    <div className={`flex flex-row items-center mb-1`}>
      <img
        src={"assets/images/icons/bullet_icon.png"}
        alt={"Bullet Icon"}
        className={`w-[8px] h-[8px]`}
      />
      <p className={`ml-3 text-[18px]`}>쿠폰 등록</p>
    </div>
  );
};

export default CouponLabel;
