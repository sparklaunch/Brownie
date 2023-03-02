import styled from "styled-components";

const IntroductionTryTitleContainer = styled.div`
  @media (480px <= width <= 767px) {
    margin-bottom: 64px;
  }
  @media (768px <= width <= 992px) {
    margin-bottom: 64px;
  }
  @media (width >= 993px) {
    margin-bottom: 130px;
  }
`;

const IntroductionTryTitleText = styled.p`
  @media (480px <= width <= 767px) {
    color: white;
    font-family: "Jua", sans-serif;
    font-size: 32px;
    text-align: center;
  }
  @media (768px <= width <= 992px) {
    color: white;
    font-family: "Jua", sans-serif;
    font-size: 32px;
    text-align: center;
  }
  @media (width >= 993px) {
    color: white;
    font-family: "Jua", sans-serif;
    font-size: 44px;
  }
`;

export { IntroductionTryTitleContainer, IntroductionTryTitleText };
