import CouponCautionTitle from "./CouponCautionTitle";
import CouponCautionDetail from "./CouponCautionDetail";
import {
  CouponCautionInnerContainer,
  CouponCautionOuterContainer
} from "./CouponCautionStyles";

const CouponCaution = () => {
  return (
    <CouponCautionOuterContainer>
      <CouponCautionInnerContainer>
        <CouponCautionTitle />
        <CouponCautionDetail />
      </CouponCautionInnerContainer>
    </CouponCautionOuterContainer>
  );
};

export default CouponCaution;
