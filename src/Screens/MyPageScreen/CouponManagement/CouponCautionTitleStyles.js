import styled from "styled-components";

const CouponCautionTitleContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  }
`;

const InfoIcon = styled.img`
  @media (480px <= width <= 767px) {
  }
  @media (768px <= width <= 992px) {
  }
  @media (width >= 993px) {
  }
`;

const CouponCautionText = styled.p`
  @media (480px <= width <= 767px) {
    font-family: "Jua", sans-serif;
    color: #1ab9c5;
    font-size: 22px;
    margin-left: 8px;
  }
  @media (768px <= width <= 992px) {
    font-family: "Jua", sans-serif;
    color: #1ab9c5;
    font-size: 22px;
    margin-left: 8px;
  }
  @media (width >= 993px) {
    font-family: "Jua", sans-serif;
    color: #1ab9c5;
    font-size: 22px;
    margin-left: 8px;
  }
`;

export { CouponCautionTitleContainer, InfoIcon, CouponCautionText };
