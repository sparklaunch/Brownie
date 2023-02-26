import styled from "styled-components";

const IntroductionContentFeatureContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
  }
  @media (min-width: 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
  }
`;

const IntroductionContentFeatureIcon = styled.img`
  @media (min-width: 768px) and (max-width: 992px) {
    margin-right: 16px;
  }
  @media (min-width: 993px) {
    margin-right: 16px;
  }
`;

const IntroductionContentText = styled.p`
  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 24px;
  }
  @media (min-width: 993px) {
    font-size: 24px;
  }
`;

export {
  IntroductionContentFeatureContainer,
  IntroductionContentFeatureIcon,
  IntroductionContentText
};