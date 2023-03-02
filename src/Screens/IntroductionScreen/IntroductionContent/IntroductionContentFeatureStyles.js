import styled from "styled-components";

const IntroductionContentFeatureContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
  }
`;

const IntroductionContentFeatureIcon = styled.img`
  @media screen and (max-width: 767px) {
    height: 36px;
    margin-right: 16px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-right: 16px;
  }
  @media screen and (min-width: 993px) {
    margin-right: 16px;
  }
`;

const IntroductionContentText = styled.p`
  @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 24px;
  }
  @media screen and (min-width: 993px) {
    font-size: 24px;
  }
`;

export {
  IntroductionContentFeatureContainer,
  IntroductionContentFeatureIcon,
  IntroductionContentText
};
