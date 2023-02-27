import styled from "styled-components";

const CatalogTitleContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
  }
`;

const CatalogTitleText = styled.p`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-size: 16px;
    background-color: #e8f6f8;
    padding: 4px 16px;
    margin: 4px 4px 0 4px;
    border-radius: 8px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media (min-width: 993px) and (min-height: 768px) {
    font-size: 16px;
    background-color: #e8f6f8;
    padding: 4px 16px;
    margin: 4px 4px 0 4px;
    border-radius: 8px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export { CatalogTitleContainer, CatalogTitleText };
