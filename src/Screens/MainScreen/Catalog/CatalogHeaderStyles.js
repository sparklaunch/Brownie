import styled from "styled-components";

const CatalogHeaderContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    padding: 32px 0;
  }
  @media (min-width: 1280px) {
    margin: 50px 0;
  }
`;

const CatalogHeaderText = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
    text-align: center;
    font-family: Jua, sans-serif;
    font-size: 32px;
  }
  @media (min-width: 1280px) {
    text-align: center;
    font-family: Jua, sans-serif;
    font-size: 44px;
  }
`;

export { CatalogHeaderContainer, CatalogHeaderText };
