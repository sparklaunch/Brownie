import styled from "styled-components";

const CatalogOuterContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1280px) {
    display: flex;
    justify-content: center;
  }
`;

const CatalogInnerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 90%;
  }
  @media (min-width: 1280px) {
    width: 1200px;
  }
`;

export { CatalogOuterContainer, CatalogInnerContainer };
