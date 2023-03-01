import styled from "styled-components";

const IntroductionContentTitleContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
  }
`;

const IntroductionContentTitleText = styled.p`
  @media (480px <= width <= 767px) {
    font-family: Jua, sans-serif;
    font-size: 32px;
    margin-bottom: 16px;
  }
  @media (768px <= width <= 992px) {
    font-family: Jua, sans-serif;
    font-size: 44px;
    margin-bottom: 16px;
  }
  @media (width >= 993px) {
    font-family: Jua, sans-serif;
    font-size: 44px;
    margin-bottom: 16px;
  }
`;

const IntroductionContentSubtitleText = styled.p`
  @media (480px <= width <= 767px) {
    font-size: 18px;
    line-height: 1.5;
    color: #515151;
  }
  @media (768px <= width <= 992px) {
    font-size: 20px;
    color: #515151;
  }
  @media (width >= 993px) {
    font-size: 20px;
    color: #515151;
  }
`;

export {
  IntroductionContentTitleContainer,
  IntroductionContentTitleText,
  IntroductionContentSubtitleText
};
