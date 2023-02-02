import CouponCautionTitle from "./CouponCautionTitle";

const CouponCaution = () => {
  return (
    <div className={`flex flex-row justify-center`}>
      <div className={`w-[800px] border-2 p-6 rounded-md bg-[#F9F9F9]`}>
        <CouponCautionTitle />
      </div>
    </div>
  );
};

export default CouponCaution;
