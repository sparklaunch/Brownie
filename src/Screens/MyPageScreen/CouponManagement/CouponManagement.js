import CouponRegistration from "./CouponRegistration";
import CouponHistory from "./CouponHistory/CouponHistory";
import CouponCaution from "./CouponCaution";
import Footer from "../../MainScreen/Footer/Footer";
import {
  CouponManagementInnerContainer,
  CouponManagementOuterContainer
} from "./CouponManagementStyles";

const CouponManagement = () => {
  return (
    <>
      <CouponManagementOuterContainer>
        <CouponManagementInnerContainer>
          <CouponRegistration />
          <CouponHistory />
          <CouponCaution />
        </CouponManagementInnerContainer>
      </CouponManagementOuterContainer>
      <Footer />
    </>
  );
};

export default CouponManagement;
