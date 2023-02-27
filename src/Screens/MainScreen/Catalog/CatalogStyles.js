import styled from "styled-components";

const CatalogOuterContainer = styled.div`
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (width >= 993px) {
    display: flex;
    justify-content: center;
  }
`;

const CatalogInnerContainer = styled.div`
  @media (480px <= width <= 767px) {
    width: 1200px;
  }
  @media (768px <= width <= 992px) {
    width: 1200px;
  }
  @media (993px <= width <= 1279px) {
    width: 1200px;
  }
  @media (width >= 1280px) {
    width: 1200px;
  }
`;

export { CatalogOuterContainer, CatalogInnerContainer };
