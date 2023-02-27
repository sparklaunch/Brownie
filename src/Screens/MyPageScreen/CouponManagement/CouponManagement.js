import CouponRegistration from "./CouponRegistration";
import CouponHistory from "./CouponHistory/CouponHistory";
import CouponCaution from "./CouponCaution";
import Footer from "../../MainScreen/Footer/Footer";

const CouponManagement = () => {
  return (
    <>
      <div className={`flex flex-row justify-center`}>
        <div className={`w-[1200px]`}>
          <CouponRegistration />
          <CouponHistory />
          <CouponCaution />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CouponManagement;
