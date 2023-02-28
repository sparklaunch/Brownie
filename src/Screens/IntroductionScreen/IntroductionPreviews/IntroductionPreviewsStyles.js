import styled from "styled-components";

const IntroductionPreviewsOuterContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 140px;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 140px;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 140px;
  }
`;

const IntroductionPreviewsInnerContainer = styled.div`
  @media (480px <= width <= 767px) {
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  @media (768px <= width <= 992px) {
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  @media (width >= 993px) {
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export {
  IntroductionPreviewsOuterContainer,
  IntroductionPreviewsInnerContainer
};
