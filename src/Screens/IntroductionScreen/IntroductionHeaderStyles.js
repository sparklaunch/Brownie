import styled from "styled-components";

const IntroductionHeaderOuterContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const IntroductionHeaderInnerContainer = styled.div`
  @media (480px <= width <= 767px) {
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px;
  }
  @media (768px <= width <= 992px) {
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px;
  }
  @media (width >= 993px) {
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px;
  }
`;

const IntroductionHeaderImage = styled.img`
  @media (480px <= width <= 767px) {
    margin-bottom: 16px;
  }
  @media (768px <= width <= 992px) {
    margin-bottom: 16px;
  }
  @media (width >= 993px) {
    margin-bottom: 16px;
  }
`;

const IntroductionHeaderTitle = styled.p`
  @media (480px <= width <= 767px) {
    font-family: "Jua", sans-serif;
    font-size: 32px;
  }
  @media (768px <= width <= 992px) {
    font-family: "Jua", sans-serif;
    font-size: 32px;
  }
  @media (width >= 993px) {
    font-family: "Jua", sans-serif;
    font-size: 32px;
  }
`;

export {
  IntroductionHeaderOuterContainer,
  IntroductionHeaderInnerContainer,
  IntroductionHeaderImage,
  IntroductionHeaderTitle
};
