import styled from "styled-components";

const IntroductionContentOuterContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #f9f9f9;
    padding: 80px;
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
  }
  @media (width >= 993px) and (height >= 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #f9f9f9;
    padding: 80px;
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
  }
`;

const IntroductionContentInnerContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (width >= 993px) and (height >= 768px) {
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export { IntroductionContentOuterContainer, IntroductionContentInnerContainer };
