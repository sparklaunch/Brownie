import styled from "styled-components";

const CouponCautionDetailContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 8px 0;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 8px 0;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 8px 0;
  }
`;

const CheckIcon = styled.img`
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
  }
  @media screen and (min-width: 993px) {
  }
`;

const CouponCautionDetailText = styled.p`
  @media screen and (max-width: 767px) {
    font-size: 16px;
    color: #707070;
    margin-left: 12px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 16px;
    color: #707070;
    margin-left: 12px;
  }
  @media screen and (min-width: 993px) {
    font-size: 16px;
    color: #707070;
    margin-left: 12px;
  }
`;

export { CouponCautionDetailContainer, CheckIcon, CouponCautionDetailText };
