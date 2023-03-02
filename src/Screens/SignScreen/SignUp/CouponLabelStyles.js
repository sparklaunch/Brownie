import styled from "styled-components";

const CouponLabelContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 4px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 4px;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 4px;
  }
`;

const BulletIcon = styled.img`
  @media screen and (max-width: 767px) {
    width: 8px;
    height: 8px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 8px;
    height: 8px;
  }
  @media screen and (min-width: 993px) {
    width: 8px;
    height: 8px;
  }
`;

const CouponRegistrationText = styled.p`
  @media screen and (max-width: 767px) {
    margin-left: 12px;
    font-size: 18px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-left: 12px;
    font-size: 18px;
  }
  @media screen and (min-width: 993px) {
    margin-left: 12px;
    font-size: 18px;
  }
`;

export { CouponLabelContainer, BulletIcon, CouponRegistrationText };
