import styled from "styled-components";

const IntroductionCatalogTitleContainer = styled.div`
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

const IntroductionCatalogTitleText = styled.p`
  @media (768px <= width <= 992px) {
    font-family: Jua, sans-serif;
    font-size: 44px;
  }
  @media (width >= 993px) {
    font-family: Jua, sans-serif;
    font-size: 44px;
  }
`;

export { IntroductionCatalogTitleContainer, IntroductionCatalogTitleText };
