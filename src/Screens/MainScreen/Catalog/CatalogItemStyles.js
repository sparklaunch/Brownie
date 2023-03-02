import styled from "styled-components";

const CatalogItemContainer = styled.div`
  @media (480px <= width <= 767px) {
    position: relative;
  }
  @media (768px <= width <= 992px) {
    position: relative;
  }
  @media (width >= 993px) {
    position: relative;
  }
`;

const CatalogItemImage = styled.img`
  @media (480px <= width <= 767px) {
    aspect-ratio: 1 / 1;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: 8px solid transparent;
    border-radius: 16px;
    transform: scale(1.04);
  }
  @media (768px <= width <= 992px) {
    aspect-ratio: 1 / 1;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: 8px solid transparent;
    border-radius: 16px;
    transform: scale(1.04);
  }
  @media (width >= 993px) {
    aspect-ratio: 1 / 1;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: 8px solid transparent;
    border-radius: 16px;
    transform: scale(1.04);
  }
`;

const DemoRibbon = styled.img`
  @media (480px <= width <= 767px) {
    position: absolute;
    top: 36%;
    width: 100%;
    transform: scale(1.04);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;
  }
  @media (768px <= width <= 992px) {
    position: absolute;
    top: 36%;
    width: 100%;
    transform: scale(1.04);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;
  }
  @media (width >= 993px) {
    position: absolute;
    top: 36%;
    width: 100%;
    transform: scale(1.04);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;
  }
`;

const CompletedBadge = styled.img`
  @media (480px <= width <= 767px) {
    position: absolute;
    top: 12px;
    right: 12px;
  }
  @media (768px <= width <= 992px) {
    position: absolute;
    top: 12px;
    right: 12px;
  }
  @media (width >= 993px) {
    position: absolute;
    top: 12px;
    right: 12px;
  }
`;

export { CatalogItemContainer, CatalogItemImage, DemoRibbon, CompletedBadge };
