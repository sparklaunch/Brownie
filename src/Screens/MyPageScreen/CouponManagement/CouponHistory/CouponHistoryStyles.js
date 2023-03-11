import styled from "styled-components";

const CouponHistoryContainer = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 48px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-bottom: 48px;
  }
  @media screen and (min-width: 993px) {
    margin-bottom: 48px;
  }
`;

const CouponHistoryText = styled.p`
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

export { CouponHistoryContainer, CouponHistoryText };
