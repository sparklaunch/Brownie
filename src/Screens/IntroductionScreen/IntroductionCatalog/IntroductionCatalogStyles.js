import styled from "styled-components";

const IntroductionCatalogOuterContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 120px;
    background-color: #f4feff;
    border-top: 1px solid #1ab9c5;
    border-bottom: 1px solid #1ab9c5;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 120px;
    background-color: #f4feff;
    border-top: 1px solid #1ab9c5;
    border-bottom: 1px solid #1ab9c5;
  }
`;

const IntroductionCatalogInnerContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export { IntroductionCatalogOuterContainer, IntroductionCatalogInnerContainer };
