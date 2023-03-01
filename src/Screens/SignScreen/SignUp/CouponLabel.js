import {
  BulletIcon,
  CouponLabelContainer,
  CouponRegistrationText
} from "./CouponLabelStyles";

const CouponLabel = () => {
  return (
    <CouponLabelContainer>
      <BulletIcon
        src={"assets/images/icons/bullet_icon.svg"}
        alt={"Bullet Icon"}
      />
      <CouponRegistrationText>쿠폰 등록</CouponRegistrationText>
    </CouponLabelContainer>
  );
};

export default CouponLabel;
