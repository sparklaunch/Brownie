import styled from "styled-components";

const CatalogOuterContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const CatalogInnerContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 90%;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    width: 1200px;
  }
`;

export { CatalogOuterContainer, CatalogInnerContainer };
