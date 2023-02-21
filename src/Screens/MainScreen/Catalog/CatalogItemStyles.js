import styled from "styled-components";

const CatalogItemContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: relative;
  }
  @media (min-width: 1280px) {
    position: relative;
  }
`;

const CatalogItemImage = styled.img`
  @media (min-width: 768px) and (max-width: 1279px) {
    aspect-ratio: 1 / 1;
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
    border: 4px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    &:hover {
      border: 4px solid #47c7d2;
    }
  }
  @media (min-width: 1280px) {
    height: 288px;
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
    border: 4px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    &:hover {
      border: 4px solid #47c7d2;
    }
  }
`;

const DemoRibbon = styled.img`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    width: 100%;
    transform: scale(1.04);
    top: 36%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media (min-width: 1280px) {
    position: absolute;
    top: 36%;
    width: 100%;
    transform: scale(1.04);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export { CatalogItemContainer, CatalogItemImage, DemoRibbon };
