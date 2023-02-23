import styled from "styled-components";

const CatalogHeaderContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    padding: 32px 0;
  }
  @media (min-width: 993px) {
    margin: 50px 0;
  }
`;

const CatalogHeaderText = styled.p`
  @media (min-width: 768px) and (max-width: 992px) {
    text-align: center;
    font-family: Jua, sans-serif;
    font-size: 32px;
  }
  @media (min-width: 993px) {
    text-align: center;
    font-family: Jua, sans-serif;
    font-size: 44px;
  }
`;

export { CatalogHeaderContainer, CatalogHeaderText };
