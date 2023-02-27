import styled from "styled-components";

const LeftEdgeThumbnailContainer = styled.div`
  @media (width <= 767px) {
    position: relative;
    width: 216px;
    height: 144px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 10px;
    overflow: clip;
    margin: 0 12px;
    border: 4px solid transparent;
    cursor: pointer;
  }

  @media (768px <= width <= 992px) {
    position: relative;
    width: 216px;
    height: 144px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 10px;
    overflow: clip;
    margin: 0 12px;
    border: 4px solid transparent;
    cursor: pointer;
  }

  @media (width >= 993px) {
    position: relative;
    width: 216px;
    height: 144px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 10px;
    overflow: clip;
    margin: 0 12px;
    border: 4px solid transparent;
    cursor: pointer;
  }
`;

const LeftEmptyThumbnailContainer = styled.div`
  @media (width <= 767px) {
    width: 216px;
    height: 144px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 10px;
    overflow: clip;
    margin: 0 12px;
    border: 4px solid transparent;
  }

  @media (768px <= width <= 992px) {
    width: 216px;
    height: 144px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 10px;
    overflow: clip;
    margin: 0 12px;
    border: 4px solid transparent;
  }

  @media (width >= 993px) {
    width: 216px;
    height: 144px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 10px;
    overflow: clip;
    margin: 0 12px;
    border: 4px solid transparent;
  }
`;

const CompletedBackdrop = styled.div`
  @media (width <= 767px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to right, transparent 0%, black 100%);
    opacity: 0.5;
  }

  @media (768px <= width <= 992px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to right, transparent 0%, black 100%);
    opacity: 0.5;
  }

  @media (width >= 993px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to right, transparent 0%, black 100%);
    opacity: 0.5;
  }
`;

const CompletedContainer = styled.div`
  @media (width <= 767px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (768px <= width <= 992px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (width >= 993px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const CompletedBadgeImage = styled.img`
  @media (width <= 767px) {
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
  }

  @media (768px <= width <= 992px) {
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
  }

  @media (width >= 993px) {
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
  }
`;

export {
  LeftEdgeThumbnailContainer,
  LeftEmptyThumbnailContainer,
  CompletedBackdrop,
  CompletedContainer,
  CompletedBadgeImage
};
