import styled from "styled-components";

const IntroductionTryTitleContainer = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 64px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-bottom: 64px;
  }
  @media screen and (min-width: 993px) {
    margin-bottom: 130px;
  }
`;

const IntroductionTryTitleText = styled.p`
  @media screen and (max-width: 767px) {
    color: white;
    font-family: "Jua", sans-serif;
    font-size: 32px;
    text-align: center;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    color: white;
    font-family: "Jua", sans-serif;
    font-size: 32px;
    text-align: center;
  }
  @media screen and (min-width: 993px) {
    color: white;
    font-family: "Jua", sans-serif;
    font-size: 44px;
  }
`;

export { IntroductionTryTitleContainer, IntroductionTryTitleText };
