import styled from "styled-components";

const ThumbnailsContainer = styled.div`
  @media (width <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const LeftEdgeThumbnailContainer = styled.div`
  @media (width <= 767px) {
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
  }
  @media (min-width: 993px) and (min-height: 768px) {
  }
`;

const LeftThumbnailContainer = styled.div`
  @media (width <= 767px) {
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
  }
  @media (min-width: 993px) and (min-height: 768px) {
  }
`;

const CentralThumbnailContainer = styled.div`
  @media (width <= 767px) {
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
  }
  @media (min-width: 993px) and (min-height: 768px) {
  }
`;

const RightThumbnailContainer = styled.div`
  @media (width <= 767px) {
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
  }
  @media (min-width: 993px) and (min-height: 768px) {
  }
`;

const RightEdgeThumbnailContainer = styled.div`
  @media (width <= 767px) {
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
  }
  @media (min-width: 993px) and (min-height: 768px) {
  }
`;

export {
  ThumbnailsContainer,
  LeftEdgeThumbnailContainer,
  LeftThumbnailContainer,
  CentralThumbnailContainer,
  RightThumbnailContainer,
  RightEdgeThumbnailContainer
};
