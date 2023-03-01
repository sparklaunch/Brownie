import styled from "styled-components";

const IntroductionContentFeatureContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
  }
`;

const IntroductionContentFeatureIcon = styled.img`
  @media (480px <= width <= 767px) {
    height: 36px;
    margin-right: 16px;
  }
  @media (768px <= width <= 992px) {
    margin-right: 16px;
  }
  @media (width >= 993px) {
    margin-right: 16px;
  }
`;

const IntroductionContentText = styled.p`
  @media (480px <= width <= 767px) {
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
  }
  @media (768px <= width <= 992px) {
    font-size: 24px;
  }
  @media (width >= 993px) {
    font-size: 24px;
  }
`;

export {
  IntroductionContentFeatureContainer,
  IntroductionContentFeatureIcon,
  IntroductionContentText
};
