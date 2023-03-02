import styled from "styled-components";

const IntroductionCatalogTitleContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
  }
`;

const IntroductionCatalogTitleText = styled.p`
  @media screen and (max-width: 767px) {
    font-family: Jua, sans-serif;
    font-size: 24px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-family: Jua, sans-serif;
    font-size: 44px;
  }
  @media screen and (min-width: 993px) {
    font-family: Jua, sans-serif;
    font-size: 44px;
  }
`;

export { IntroductionCatalogTitleContainer, IntroductionCatalogTitleText };
