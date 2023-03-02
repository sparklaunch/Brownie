import styled from "styled-components";

const MyInformationTitle = styled.div`
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

const MyInformationOuterContainer = styled.div`
  @media (480px <= width <= 767px) {
  }
  @media (768px <= width <= 992px) {
  }
  @media (width >= 993px) {
  }
`;

const MyInformationInnerContainer = styled.div`
  @media (480px <= width <= 767px) {
    padding: 32px;
    border: 1px solid #dfdfdf;
    border-radius: 4px;
    font-size: 18px;
    display: grid;
    gap: 12px;
  }
  @media (768px <= width <= 992px) {
    padding: 32px;
    border: 1px solid #dfdfdf;
    border-radius: 4px;
    font-size: 18px;
    display: grid;
    gap: 12px;
  }
  @media (width >= 993px) {
    padding: 32px;
    border: 1px solid #dfdfdf;
    border-radius: 4px;
    font-size: 18px;
    display: grid;
    gap: 12px;
  }
`;

const PlainText = styled.p`
  @media (480px <= width <= 767px) {
  }
  @media (768px <= width <= 992px) {
  }
  @media (width >= 993px) {
  }
`;

const CouponCodeSpan = styled.span`
  @media (480px <= width <= 767px) {
    color: #f34d7e;
  }
  @media (768px <= width <= 992px) {
    color: #f34d7e;
  }
  @media (width >= 993px) {
    color: #f34d7e;
  }
`;

export {
  MyInformationTitle,
  MyInformationOuterContainer,
  MyInformationInnerContainer,
  PlainText,
  CouponCodeSpan
};
