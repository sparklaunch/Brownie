import styled from "styled-components";

const ThumbnailsContainer = styled.div`
  @media (width <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const LeftEdgeThumbnailContainer = styled.div`
  @media (width <= 767px) {
  }

  @media (768px <= width <= 992px) {
  }

  @media (width >= 993px) {
  }
`;

const LeftThumbnailContainer = styled.div`
  @media (width <= 767px) {
  }

  @media (768px <= width <= 992px) {
  }

  @media (width >= 993px) {
  }
`;

const CentralThumbnailContainer = styled.div`
  @media (width <= 767px) {
  }

  @media (768px <= width <= 992px) {
  }

  @media (width >= 993px) {
  }
`;

const RightThumbnailContainer = styled.div`
  @media (width <= 767px) {
  }

  @media (768px <= width <= 992px) {
  }

  @media (width >= 993px) {
  }
`;

const RightEdgeThumbnailContainer = styled.div`
  @media (width <= 767px) {
  }

  @media (768px <= width <= 992px) {
  }

  @media (width >= 993px) {
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
