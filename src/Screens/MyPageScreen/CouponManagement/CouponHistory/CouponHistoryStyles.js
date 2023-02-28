import styled from "styled-components";

const CouponHistoryContainer = styled.div`
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

const CouponHistoryText = styled.p`
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

export { CouponHistoryContainer, CouponHistoryText };
