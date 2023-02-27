import styled from "styled-components";

const CatalogHeaderContainer = styled.div`
  @media (768px <= width <= 992px) {
    padding: 32px 0;
  }
  @media (width >= 993px) {
    margin: 50px 0;
  }
`;

const CatalogHeaderText = styled.p`
  @media (768px <= width <= 992px) {
    text-align: center;
    font-family: Jua, sans-serif;
    font-size: 32px;
  }
  @media (width >= 993px) {
    text-align: center;
    font-family: Jua, sans-serif;
    font-size: 44px;
  }
`;

export { CatalogHeaderContainer, CatalogHeaderText };
