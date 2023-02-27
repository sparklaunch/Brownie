import styled from "styled-components";

const IntroductionContentFeatureContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
  }
  @media (width >= 993px) and (height >= 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
  }
`;

const IntroductionContentFeatureIcon = styled.img`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    margin-right: 16px;
  }
  @media (width >= 993px) and (height >= 768px) {
    margin-right: 16px;
  }
`;

const IntroductionContentText = styled.p`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-size: 24px;
  }
  @media (width >= 993px) and (height >= 768px) {
    font-size: 24px;
  }
`;

export {
  IntroductionContentFeatureContainer,
  IntroductionContentFeatureIcon,
  IntroductionContentText
};
