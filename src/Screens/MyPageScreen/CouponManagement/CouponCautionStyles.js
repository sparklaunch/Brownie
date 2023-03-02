import styled from "styled-components";

const CouponCautionOuterContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 48px 0;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 48px 0;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 48px 0;
  }
`;

const CouponCautionInnerContainer = styled.div`
  @media screen and (max-width: 767px) {
    width: 800px;
    border: 2px solid #dfdfdf;
    border-radius: 14px;
    padding: 24px;
    background-color: #f9f9f9;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 800px;
    border: 2px solid #dfdfdf;
    border-radius: 14px;
    padding: 24px;
    background-color: #f9f9f9;
  }
  @media screen and (min-width: 993px) {
    width: 800px;
    border: 2px solid #dfdfdf;
    border-radius: 14px;
    padding: 24px;
    background-color: #f9f9f9;
  }
`;

export { CouponCautionOuterContainer, CouponCautionInnerContainer };
