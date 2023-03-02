import styled from "styled-components";

const CatalogItemContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: relative;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: relative;
  }
  @media screen and (min-width: 993px) {
    position: relative;
  }
`;

const CatalogItemImage = styled.img`
  @media screen and (max-width: 767px) {
    aspect-ratio: 1 / 1;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
    border: 8px solid transparent;
    border-radius: 16px;
    transform: scale(1.04);
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    aspect-ratio: 1 / 1;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
    border: 8px solid transparent;
    border-radius: 16px;
    transform: scale(1.04);
  }
  @media screen and (min-width: 993px) {
    aspect-ratio: 1 / 1;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
    border: 8px solid transparent;
    border-radius: 16px;
    transform: scale(1.04);
  }
`;

const DemoRibbon = styled.img`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 36%;
    width: 100%;
    transform: scale(1.04);
    cursor: pointer;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 36%;
    width: 100%;
    transform: scale(1.04);
    cursor: pointer;
  }
  @media screen and (min-width: 993px) {
    position: absolute;
    top: 36%;
    width: 100%;
    transform: scale(1.04);
    cursor: pointer;
  }
`;

const CompletedBadge = styled.img`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 12px;
    right: 12px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 12px;
    right: 12px;
  }
  @media screen and (min-width: 993px) {
    position: absolute;
    top: 12px;
    right: 12px;
  }
`;

export { CatalogItemContainer, CatalogItemImage, DemoRibbon, CompletedBadge };
