import styled from "styled-components";

const CatalogItemContainer = styled.div`
  @media (768px <= width <= 992px) {
    position: relative;
  }
  @media (width >= 993px) {
    position: relative;
  }
`;

const CatalogItemImage = styled.img`
  @media (768px <= width <= 992px) {
    aspect-ratio: 1 / 1;
    width: 100%;
    object-fit: cover;
    border-radius: 14px;
    border: 4px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
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
    &:hover {
      border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3Epath%7Banimation:stroke 2s infinite ease-in-out%3B%7D%40keyframes stroke%7Bto%7Bstroke-dashoffset:776%3B%7D%7D%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2347c7d2' /%3E%3Cstop offset='25%25' stop-color='%2347c7d2' /%3E%3Cstop offset='50%25' stop-color='%2347c7d2' /%3E%3Cstop offset='100%25' stop-color='%2347c7d2' /%3E%3C/linearGradient%3E %3Cpath d='M1.5 1.5 l97 0l0 97l-97 0 l0 -97' stroke-linecap='round' stroke-linejoin='round' stroke='url(%23g)' stroke-width='2' stroke-dasharray='388'/%3E %3C/svg%3E")
        1;
    }
  }
`;

const DemoRibbon = styled.img`
  @media (768px <= width <= 992px) {
    position: absolute;
    width: 100%;
    transform: scale(1.04);
    top: 36%;
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
