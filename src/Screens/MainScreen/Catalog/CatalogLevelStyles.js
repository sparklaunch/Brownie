import styled from "styled-components";

const CatalogLevelContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
  }
  @media (width >= 993px) and (height >= 768px) {
    margin-bottom: 12px;
  }
`;

const CatalogLevelLabelContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
    margin-top: 24px;
  }
  @media (width >= 993px) and (height >= 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
    margin-top: 24px;
  }
`;

const CatalogLevelLabel = styled.p`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-family: "Jua", sans-serif;
    font-size: 20px;
    margin-left: 12px;
  }
  @media (width >= 993px) and (height >= 768px) {
    font-family: "Jua", sans-serif;
    font-size: 20px;
    margin-left: 12px;
  }
`;

const CatalogLevelGridContainer = styled.div`
  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  @media (min-width: 993px) and (min-height: 768px) and (max-width: 1279px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
`;

export {
  CatalogLevelGridContainer,
  CatalogLevelContainer,
  CatalogLevelLabelContainer,
  CatalogLevelLabel
};
