import styled from "styled-components";
import Constants from "../../../../Utilities/Constants";

const CouponHistoryItemContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: relative;
    border: 2px solid ${Constants.LIGHT_GRAY};
    border-radius: 14px;
    overflow: clip;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: relative;
    border: 2px solid ${Constants.LIGHT_GRAY};
    border-radius: 14px;
    overflow: clip;
  }
  @media screen and (min-width: 993px) {
    position: relative;
    border: 2px solid ${Constants.LIGHT_GRAY};
    border-radius: 14px;
    overflow: clip;
  }
`;

const CouponBoxContainer = styled.div`
  @media screen and (max-width: 767px) {
    padding: 24px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    padding: 24px;
  }
  @media screen and (min-width: 993px) {
    padding: 24px;
  }
`;

const CouponBoxTitle = styled.p`
  @media screen and (max-width: 767px) {
    color: ${Constants.DARK_GRAY};
    font-size: 16px;
    margin-bottom: 4px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    color: ${Constants.DARK_GRAY};
    font-size: 16px;
    margin-bottom: 4px;
  }
  @media screen and (min-width: 993px) {
    color: ${Constants.DARK_GRAY};
    font-size: 16px;
    margin-bottom: 4px;
  }
`;

const CouponCodeText = styled.p`
  @media screen and (max-width: 767px) {
    font-size: 22px;
    color: #f34d7e;
    font-weight: bold;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 22px;
    color: #f34d7e;
    font-weight: bold;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 993px) {
    font-size: 22px;
    color: #f34d7e;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

const CouponDateFromText = styled.p`
  @media screen and (max-width: 767px) {
    color: ${Constants.DARK_GRAY};
    font-size: 13px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    color: ${Constants.DARK_GRAY};
    font-size: 13px;
  }
  @media screen and (min-width: 993px) {
    color: ${Constants.DARK_GRAY};
    font-size: 13px;
  }
`;

const CouponDateToText = styled.p`
  @media screen and (max-width: 767px) {
    color: ${Constants.DARK_GRAY};
    font-size: 13px;
    font-weight: bold;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    color: ${Constants.DARK_GRAY};
    font-size: 13px;
    font-weight: bold;
  }
  @media screen and (min-width: 993px) {
    color: ${Constants.DARK_GRAY};
    font-size: 13px;
    font-weight: bold;
  }
`;

const UsedCouponContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    opacity: 0.3;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    opacity: 0.3;
  }
  @media screen and (min-width: 993px) {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    opacity: 0.3;
  }
`;

const UsedCouponText = styled.p`
  @media screen and (max-width: 767px) {
    color: white;
    font-family: "Jua", sans-serif;
    font-size: 28px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    color: white;
    font-family: "Jua", sans-serif;
    font-size: 28px;
  }
  @media screen and (min-width: 993px) {
    color: white;
    font-family: "Jua", sans-serif;
    font-size: 28px;
  }
`;

export {
  CouponHistoryItemContainer,
  CouponBoxContainer,
  CouponBoxTitle,
  CouponCodeText,
  CouponDateFromText,
  CouponDateToText,
  UsedCouponContainer,
  UsedCouponText
};
