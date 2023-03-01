import styled from "styled-components";

const SignUpFieldsContainer = styled.div`
  @media (480px <= width <= 767px) {
    padding-top: 12px;
  }
  @media (768px <= width <= 992px) {
    padding-top: 12px;
  }
  @media (width >= 993px) {
    padding-top: 12px;
  }
`;

const RequiredFieldsNoticeText = styled.p`
  @media (480px <= width <= 767px) {
    text-align: right;
    margin-bottom: 4px;
    color: red;
  }
  @media (768px <= width <= 992px) {
    text-align: right;
    margin-bottom: 4px;
    color: red;
  }
  @media (width >= 993px) {
    text-align: right;
    margin-bottom: 4px;
    color: red;
  }
`;

const RelativeContainer = styled.div`
  @media (480px <= width <= 767px) {
    position: relative;
  }
  @media (768px <= width <= 992px) {
    position: relative;
  }
  @media (width >= 993px) {
    position: relative;
  }
`;

const AsteriskContainer = styled.div`
  @media (480px <= width <= 767px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    font-size: 20px;
    color: red;
  }
  @media (768px <= width <= 992px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    font-size: 20px;
    color: red;
  }
  @media (width >= 993px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    font-size: 20px;
    color: red;
  }
`;

const CouponFieldContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const CouponMessageText = styled.p`
  @media (480px <= width <= 767px) {
    color: green;
    font-size: 14px;
    margin-top: 4px;
  }
  @media (768px <= width <= 992px) {
    color: green;
    font-size: 14px;
    margin-top: 4px;
  }
  @media (width >= 993px) {
    color: green;
    font-size: 14px;
    margin-top: 4px;
  }
`;

const TermsContainer = styled.div`
  @media (480px <= width <= 767px) {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    left: -12px;
  }
  @media (768px <= width <= 992px) {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    left: -12px;
  }
  @media (width >= 993px) {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    left: -12px;
  }
`;

const TermsText = styled.p`
  @media (480px <= width <= 767px) {
    font-weight: lighter;
    font-size: 16px;
  }
  @media (768px <= width <= 992px) {
    font-weight: lighter;
    font-size: 16px;
  }
  @media (width >= 993px) {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export {
  SignUpFieldsContainer,
  RequiredFieldsNoticeText,
  RelativeContainer,
  AsteriskContainer,
  CouponFieldContainer,
  CouponMessageText,
  TermsContainer,
  TermsText
};
