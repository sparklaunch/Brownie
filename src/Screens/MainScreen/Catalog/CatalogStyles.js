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
  @media (768px <= width <= 992px) {
    width: 90%;
  }
  @media (width >= 993px) {
    width: 1200px;
  }
`;

export { CatalogOuterContainer, CatalogInnerContainer };
