import styled from "styled-components";

const IntroductionContentTitleContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
  }
`;

const IntroductionContentTitleText = styled.p`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-family: Jua, sans-serif;
    font-size: 44px;
    margin-bottom: 16px;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    font-family: Jua, sans-serif;
    font-size: 44px;
    margin-bottom: 16px;
  }
`;

const IntroductionContentSubtitleText = styled.p`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-size: 20px;
    color: #515151;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    font-size: 20px;
    color: #515151;
  }
`;

export {
  IntroductionContentTitleContainer,
  IntroductionContentTitleText,
  IntroductionContentSubtitleText
};
