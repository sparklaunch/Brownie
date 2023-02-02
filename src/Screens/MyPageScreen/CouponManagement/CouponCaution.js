import CouponCautionTitle from "./CouponCautionTitle";
import CouponCautionDetail from "./CouponCautionDetail";

const CouponCaution = () => {
  return (
    <div className={`flex flex-row justify-center`}>
      <div className={`w-[800px] border-2 p-8 rounded-md bg-[#F9F9F9]`}>
        <CouponCautionTitle />
        <CouponCautionDetail />
      </div>
    </div>
  );
};

export default CouponCaution;
