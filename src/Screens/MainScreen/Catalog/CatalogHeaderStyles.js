import styled from "styled-components";

const CatalogHeaderContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    padding: 32px 0;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    margin: 50px 0;
  }
`;

const CatalogHeaderText = styled.p`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    text-align: center;
    font-family: Jua, sans-serif;
    font-size: 32px;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    text-align: center;
    font-family: Jua, sans-serif;
    font-size: 44px;
  }
`;

export { CatalogHeaderContainer, CatalogHeaderText };
