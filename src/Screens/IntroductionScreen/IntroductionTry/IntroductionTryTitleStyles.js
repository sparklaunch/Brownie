import styled from "styled-components";

const IntroductionTryTitleContainer = styled.div`
  @media (480px <= width <= 767px) {
    margin-bottom: 130px;
  }
  @media (768px <= width <= 992px) {
    margin-bottom: 130px;
  }
  @media (width >= 993px) {
    margin-bottom: 130px;
  }
`;

const IntroductionTryTitleText = styled.p`
  @media (480px <= width <= 767px) {
    color: white;
    font-family: "Jua", sans-serif;
    font-size: 44px;
  }
  @media (768px <= width <= 992px) {
    color: white;
    font-family: "Jua", sans-serif;
    font-size: 44px;
  }
  @media (width >= 993px) {
    color: white;
    font-family: "Jua", sans-serif;
    font-size: 44px;
  }
`;

export { IntroductionTryTitleContainer, IntroductionTryTitleText };
