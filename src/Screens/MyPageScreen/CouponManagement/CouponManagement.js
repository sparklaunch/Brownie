import CouponRegistration from "./CouponRegistration";
import CouponHistory from "./CouponHistory";

const CouponManagement = () => {
  return (
    <div className={`flex flex-row justify-center`}>
      <div className={`w-[1200px]`}>
        <CouponRegistration />
        <CouponHistory />
      </div>
    </div>
  );
};

export default CouponManagement;
