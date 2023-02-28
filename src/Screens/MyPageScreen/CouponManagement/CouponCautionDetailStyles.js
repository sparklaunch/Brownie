import styled from "styled-components";

const CouponCautionDetailContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 8px 0;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 8px 0;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 8px 0;
  }
`;

const CheckIcon = styled.img`
  @media (480px <= width <= 767px) {
  }
  @media (768px <= width <= 992px) {
  }
  @media (width >= 993px) {
  }
`;

const CouponCautionDetailText = styled.p`
  @media (480px <= width <= 767px) {
    font-size: 16px;
    color: #707070;
    margin-left: 12px;
  }
  @media (768px <= width <= 992px) {
    font-size: 16px;
    color: #707070;
    margin-left: 12px;
  }
  @media (width >= 993px) {
    font-size: 16px;
    color: #707070;
    margin-left: 12px;
  }
`;

export { CouponCautionDetailContainer, CheckIcon, CouponCautionDetailText };
