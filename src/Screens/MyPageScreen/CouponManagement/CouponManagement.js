import CouponRegistration from "./CouponRegistration";
import CouponHistory from "./CouponHistory";
import CouponCaution from "./CouponCaution";

const CouponManagement = () => {
  return (
    <div className={`flex flex-row justify-center`}>
      <div className={`w-[1200px]`}>
        <CouponRegistration />
        <CouponHistory />
        <CouponCaution />
      </div>
    </div>
  );
};

export default CouponManagement;
