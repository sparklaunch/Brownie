import styled from "styled-components";

const CatalogHeaderContainer = styled.div`
  @media (480px <= width <= 767px) {
    margin: 50px 0;
  }
  @media (768px <= width <= 992px) {
    margin: 50px 0;
  }
  @media (width >= 993px) {
    margin: 50px 0;
  }
`;

const CatalogHeaderText = styled.p`
  @media (480px <= width <= 767px) {
    text-align: center;
    font-family: Jua, sans-serif;
    font-size: 32px;
  }
  @media (768px <= width <= 992px) {
    text-align: center;
    font-family: Jua, sans-serif;
    font-size: 44px;
  }
  @media (width >= 993px) {
    text-align: center;
    font-family: Jua, sans-serif;
    font-size: 44px;
  }
`;

export { CatalogHeaderContainer, CatalogHeaderText };
