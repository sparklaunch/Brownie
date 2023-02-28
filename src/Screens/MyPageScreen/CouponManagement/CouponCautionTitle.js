import {
  CouponCautionText,
  CouponCautionTitleContainer,
  InfoIcon
} from "./CouponCautionTitleStyles";

const CouponCautionTitle = () => {
  return (
    <CouponCautionTitleContainer>
      <InfoIcon
        src={"assets/images/icons/info_accent_icon.svg"}
        alt={"Info Icon"}
      />
      <CouponCautionText>꼭 확인해주세요!</CouponCautionText>
    </CouponCautionTitleContainer>
  );
};

export default CouponCautionTitle;
