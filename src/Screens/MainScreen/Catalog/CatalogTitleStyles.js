import styled from "styled-components";

const CatalogTitleContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
`;

const CatalogTitleText = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 16px;
    background-color: #e8f6f8;
    padding: 4px 16px;
    margin: 4px 4px 0 4px;
    border-radius: 8px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media (min-width: 1280px) {
    font-size: 16px;
    background-color: #e8f6f8;
    padding: 4px 16px;
    margin: 4px 4px 0 4px;
    border-radius: 8px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export { CatalogTitleContainer, CatalogTitleText };
