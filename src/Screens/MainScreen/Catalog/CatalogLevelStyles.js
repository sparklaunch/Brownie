import styled from "styled-components";

const CatalogLevelContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    margin-bottom: 12px;
  }
`;

const CatalogLevelLabelContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
  }
`;

const CatalogLevelLabel = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
    font-family: "Jua", sans-serif;
    font-size: 20px;
    margin-left: 8px;
  }
  @media (min-width: 1280px) {
    font-family: "Jua", sans-serif;
    font-size: 20px;
    margin-left: 8px;
  }
`;

export { CatalogLevelContainer, CatalogLevelLabelContainer, CatalogLevelLabel };
