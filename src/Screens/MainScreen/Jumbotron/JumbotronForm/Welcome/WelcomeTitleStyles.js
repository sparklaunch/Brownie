import styled from "styled-components";

const WelcomeTitleContainer = styled.div`
  @media screen and (max-width: 767px) {
    text-align: center;
    margin-bottom: 12px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    text-align: center;
    margin-bottom: 12px;
  }
  @media screen and (min-width: 993px) {
    text-align: center;
    margin-bottom: 12px;
  }
`;

const WelcomeTitleText = styled.p`
  @media screen and (max-width: 767px) {
    font-weight: bolder;
    color: white;
    font-size: 24px;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-weight: bolder;
    color: white;
    font-size: 24px;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 993px) {
    font-weight: bolder;
    color: white;
    font-size: 24px;
    margin-bottom: 8px;
  }
`;

const WelcomeGreetingText = styled.p`
  @media screen and (max-width: 767px) {
    color: white;
    font-size: 14px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    color: white;
    font-size: 14px;
  }
  @media screen and (min-width: 993px) {
    color: white;
    font-size: 14px;
  }
`;

export { WelcomeTitleContainer, WelcomeTitleText, WelcomeGreetingText };
