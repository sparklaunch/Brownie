import styled from "styled-components";

const CouponRegistrationOuterContainer = styled.div`
  @media (480px <= width <= 767px) {
    margin-bottom: 48px;
  }
  @media (768px <= width <= 992px) {
    margin-bottom: 48px;
  }
  @media (width >= 993px) {
    margin-bottom: 48px;
  }
`;

const CouponRegistrationInnerContainer = styled.div`
  @media (480px <= width <= 767px) {
    margin-bottom: 4px;
  }
  @media (768px <= width <= 992px) {
    margin-bottom: 4px;
  }
  @media (width >= 993px) {
    margin-bottom: 4px;
  }
`;

const CouponRegistrationText = styled.p`
  @media (480px <= width <= 767px) {
    border-left: 4px solid #00aea8;
    padding-left: 12px;
    margin-bottom: 12px;
    font-size: 20px;
  }
  @media (768px <= width <= 992px) {
    border-left: 4px solid #00aea8;
    padding-left: 12px;
    margin-bottom: 12px;
    font-size: 20px;
  }
  @media (width >= 993px) {
    border-left: 4px solid #00aea8;
    padding-left: 12px;
    margin-bottom: 12px;
    font-size: 20px;
  }
`;

const CouponRegistrationContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
  }
`;

const CouponMessageText = styled.p`
  @media (480px <= width <= 767px) {
    color: #ec1c47;
    font-size: 13px;
  }
  @media (768px <= width <= 992px) {
    color: #ec1c47;
    font-size: 13px;
  }
  @media (width >= 993px) {
    color: #ec1c47;
    font-size: 13px;
  }
`;

export {
  CouponRegistrationOuterContainer,
  CouponRegistrationInnerContainer,
  CouponRegistrationText,
  CouponRegistrationContainer,
  CouponMessageText
};
