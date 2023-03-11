import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const CouponCautionTitleContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  }
`;

const InfoIcon = styled.img`
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
  }
  @media screen and (min-width: 993px) {
  }
`;

const CouponCautionText = styled.p`
  @media screen and (max-width: 767px) {
    font-family: "Jua", sans-serif;
    color: ${Constants.ACCENT_COLOR};
    font-size: 22px;
    margin-left: 8px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-family: "Jua", sans-serif;
    color: ${Constants.ACCENT_COLOR};
    font-size: 22px;
    margin-left: 8px;
  }
  @media screen and (min-width: 993px) {
    font-family: "Jua", sans-serif;
    color: ${Constants.ACCENT_COLOR};
    font-size: 22px;
    margin-left: 8px;
  }
`;

export { CouponCautionTitleContainer, InfoIcon, CouponCautionText };
