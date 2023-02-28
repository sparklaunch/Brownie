import styled from "styled-components";

const CouponCautionOuterContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 48px 0;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 48px 0;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 48px 0;
  }
`;

const CouponCautionInnerContainer = styled.div`
  @media (480px <= width <= 767px) {
    width: 800px;
    border: 2px solid #f9f9f9;
    border-radius: 4px;
    padding: 24px;
  }
  @media (768px <= width <= 992px) {
    width: 800px;
    border: 2px solid #f9f9f9;
    border-radius: 4px;
    padding: 24px;
  }
  @media (width >= 993px) {
    width: 800px;
    border: 2px solid #f9f9f9;
    border-radius: 4px;
    padding: 24px;
  }
`;

export { CouponCautionOuterContainer, CouponCautionInnerContainer };
