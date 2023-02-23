import styled from "styled-components";

const CatalogLevelContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
    margin-bottom: 12px;
  }
`;

const CatalogLevelLabelContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
    margin-top: 24px;
  }
  @media (min-width: 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
    margin-top: 24px;
  }
`;

const CatalogLevelLabel = styled.p`
  @media (min-width: 768px) and (max-width: 992px) {
    font-family: "Jua", sans-serif;
    font-size: 20px;
    margin-left: 12px;
  }
  @media (min-width: 993px) {
    font-family: "Jua", sans-serif;
    font-size: 20px;
    margin-left: 12px;
  }
`;

export { CatalogLevelContainer, CatalogLevelLabelContainer, CatalogLevelLabel };
