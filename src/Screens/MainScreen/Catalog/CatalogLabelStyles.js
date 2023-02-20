import styled from "styled-components";

const CatalogLabelContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    bottom: 55px;
    left: 15px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media (min-width: 1280px) {
    position: absolute;
    bottom: 12px;
    left: 2px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

const CatalogLabelText = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
    background-color: #1ab9c5;
    color: white;
    font-size: 14px;
    padding: 4px 8px;
    border-radius: 8px;
  }
  @media (min-width: 1280px) {
    background-color: #1ab9c5;
    color: white;
    font-size: 14px;
    padding: 4px 8px;
    border-radius: 8px;
  }
`;

export { CatalogLabelContainer, CatalogLabelText };
