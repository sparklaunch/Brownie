import styled from "styled-components";

const CatalogOuterContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (width >= 993px) and (height >= 768px) {
    display: flex;
    justify-content: center;
  }
`;

const CatalogInnerContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 90%;
  }
  @media (width >= 993px) and (height >= 768px) {
    width: 1200px;
  }
`;

export { CatalogOuterContainer, CatalogInnerContainer };
