import styled from "styled-components";

const MyInformationTitle = styled.div`
  @media screen and (max-width: 767px) {
    border-left: 4px solid #00aea8;
    padding-left: 12px;
    margin-bottom: 12px;
    font-size: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    border-left: 4px solid #00aea8;
    padding-left: 12px;
    margin-bottom: 12px;
    font-size: 20px;
  }
  @media screen and (min-width: 993px) {
    border-left: 4px solid #00aea8;
    padding-left: 12px;
    margin-bottom: 12px;
    font-size: 20px;
  }
`;

const MyInformationOuterContainer = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 32px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-bottom: 32px;
  }
  @media screen and (min-width: 993px) {
  }
`;

const MyInformationInnerContainer = styled.div`
  @media screen and (max-width: 767px) {
    padding: 32px;
    border: 1px solid #dfdfdf;
    border-radius: 4px;
    font-size: 18px;
    display: grid;
    gap: 12px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    padding: 32px;
    border: 1px solid #dfdfdf;
    border-radius: 4px;
    font-size: 18px;
    display: grid;
    gap: 12px;
  }
  @media screen and (min-width: 993px) {
    padding: 32px;
    border: 1px solid #dfdfdf;
    border-radius: 4px;
    font-size: 18px;
    display: grid;
    gap: 12px;
  }
`;

const PlainText = styled.p`
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 14px;
  }
  @media screen and (min-width: 993px) {
  }
`;

const CouponCodeSpan = styled.span`
  @media screen and (max-width: 767px) {
    color: #f34d7e;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    color: #f34d7e;
  }
  @media screen and (min-width: 993px) {
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
