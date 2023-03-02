import styled from "styled-components";

const CatalogTitleContainer = styled.div`
  @media (480px <= width <= 767px) {
    margin-top: 8px;
  }
  @media (768px <= width <= 992px) {
    margin-top: 8px;
  }
  @media (width >= 993px) {
  }
`;

const CatalogTitleText = styled.p`
  @media (480px <= width <= 767px) {
    font-size: 16px;
    background-color: #e8f6f8;
    padding: 4px 16px;
    margin: 4px 4px 0 4px;
    border-radius: 8px;
  }
  @media (768px <= width <= 992px) {
    font-size: 16px;
    background-color: #e8f6f8;
    padding: 4px 16px;
    margin: 4px 4px 0 4px;
    border-radius: 8px;
  }
  @media (width >= 993px) {
    font-size: 16px;
    background-color: #e8f6f8;
    padding: 4px 16px;
    margin: 4px 4px 0 4px;
    border-radius: 8px;
  }
`;

export { CatalogTitleContainer, CatalogTitleText };
