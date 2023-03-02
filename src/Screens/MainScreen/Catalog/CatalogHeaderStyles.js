import styled from "styled-components";

const CatalogHeaderContainer = styled.div`
  @media screen and (max-width: 767px) {
    margin: 50px 0;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin: 50px 0;
  }
  @media screen and (min-width: 993px) {
    margin: 50px 0;
  }
`;

const CatalogHeaderText = styled.p`
  @media screen and (max-width: 767px) {
    text-align: center;
    font-family: Jua, sans-serif;
    font-size: 32px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    text-align: center;
    font-family: Jua, sans-serif;
    font-size: 44px;
  }
  @media screen and (min-width: 993px) {
    text-align: center;
    font-family: Jua, sans-serif;
    font-size: 44px;
  }
`;

export { CatalogHeaderContainer, CatalogHeaderText };
