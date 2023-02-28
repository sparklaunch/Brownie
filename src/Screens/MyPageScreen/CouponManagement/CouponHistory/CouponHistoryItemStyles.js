import styled from "styled-components";

const CouponHistoryItemContainer = styled.div`
  @media (480px <= width <= 767px) {
    position: relative;
    border: 2px solid #dfdfdf;
    border-radius: 4px;
    overflow: clip;
  }
  @media (768px <= width <= 992px) {
    position: relative;
    border: 2px solid #dfdfdf;
    border-radius: 4px;
    overflow: clip;
  }
  @media (width >= 993px) {
    position: relative;
    border: 2px solid #dfdfdf;
    border-radius: 4px;
    overflow: clip;
  }
`;

const CouponBoxContainer = styled.div`
  @media (480px <= width <= 767px) {
    padding: 24px;
  }
  @media (768px <= width <= 992px) {
    padding: 24px;
  }
  @media (width >= 993px) {
    padding: 24px;
  }
`;

const CouponBoxTitle = styled.p`
  @media (480px <= width <= 767px) {
    color: #515151;
    font-size: 16px;
    margin-bottom: 4px;
  }
  @media (768px <= width <= 992px) {
    color: #515151;
    font-size: 16px;
    margin-bottom: 4px;
  }
  @media (width >= 993px) {
    color: #515151;
    font-size: 16px;
    margin-bottom: 4px;
  }
`;

const CouponCodeText = styled.p`
  @media (480px <= width <= 767px) {
    font-size: 22px;
    color: #f34d7e;
    font-weight: bold;
    margin-bottom: 20px;
  }
  @media (768px <= width <= 992px) {
    font-size: 22px;
    color: #f34d7e;
    font-weight: bold;
    margin-bottom: 20px;
  }
  @media (width >= 993px) {
    font-size: 22px;
    color: #f34d7e;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

const CouponDateFromText = styled.p`
  @media (480px <= width <= 767px) {
    color: #515151;
    font-size: 13px;
  }
  @media (768px <= width <= 992px) {
    color: #515151;
    font-size: 13px;
  }
  @media (width >= 993px) {
    color: #515151;
    font-size: 13px;
  }
`;

const CouponDateToText = styled.p`
  @media (480px <= width <= 767px) {
    color: #515151;
    font-size: 13px;
    font-weight: bold;
  }
  @media (768px <= width <= 992px) {
    color: #515151;
    font-size: 13px;
    font-weight: bold;
  }
  @media (width >= 993px) {
    color: #515151;
    font-size: 13px;
    font-weight: bold;
  }
`;

const UsedCouponContainer = styled.div`
  @media (480px <= width <= 767px) {
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
    opacity: 0.5;
  }
  @media (768px <= width <= 992px) {
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
    opacity: 0.5;
  }
  @media (width >= 993px) {
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
    opacity: 0.5;
  }
`;

const UsedCouponText = styled.p`
  @media (480px <= width <= 767px) {
    color: white;
    font-family: "Jua", sans-serif;
    font-size: 28px;
  }
  @media (768px <= width <= 992px) {
    color: white;
    font-family: "Jua", sans-serif;
    font-size: 28px;
  }
  @media (width >= 993px) {
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
