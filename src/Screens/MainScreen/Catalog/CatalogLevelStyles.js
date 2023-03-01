import styled from "styled-components";

const CatalogLevelContainer = styled.div`
  @media (480px <= width <= 767px) {
    margin-bottom: 48px;
  }
  @media (768px <= width <= 992px) {
    margin-bottom: 12px;
  }
  @media (width >= 993px) {
    margin-bottom: 12px;
  }
`;

const CatalogLevelLabelContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
    margin-top: 24px;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
    margin-top: 24px;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
    margin-top: 24px;
  }
`;

const CatalogLevelLabel = styled.p`
  @media (480px <= width <= 767px) {
    font-family: "Jua", sans-serif;
    font-size: 20px;
    margin-left: 12px;
  }
  @media (768px <= width <= 992px) {
    font-family: "Jua", sans-serif;
    font-size: 20px;
    margin-left: 12px;
  }
  @media (width >= 993px) {
    font-family: "Jua", sans-serif;
    font-size: 20px;
    margin-left: 12px;
  }
`;

const CatalogLevelGridContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }
  @media (768px <= width <= 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  @media (993px <= width <= 1279px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  @media (width >= 1280px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
`;

const SnowflakeIcon = styled.img`
  @media (480px <= width <= 767px) {
    width: 14px;
    height: 14px;
  }
  @media (768px <= width <= 992px) {
    width: 14px;
    height: 14px;
  }
  @media (width >= 993px) {
    width: 14px;
    height: 14px;
  }
`;

export {
  CatalogLevelGridContainer,
  CatalogLevelContainer,
  CatalogLevelLabelContainer,
  CatalogLevelLabel,
  SnowflakeIcon
};
