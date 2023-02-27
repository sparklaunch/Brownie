import styled from "styled-components";

const ThumbnailPageContainer = styled.div`
  @media (width <= 767px) {
    position: relative;
    overflow: clip;
  }

  @media (768px <= width <= 992px) {
    position: relative;
    overflow: clip;
  }

  @media (width >= 993px) {
    position: relative;
    overflow: clip;
  }
`;

const ThumbnailPageImage = styled.img`
  @media (width <= 767px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (768px <= width <= 992px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (width >= 993px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ThumbnailPageGradient = styled.div`
  @media (width <= 767px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    ${(props) =>
      props.direction === "left" &&
      `background-image: linear-gradient(to right, #0c4a4e 0%, transparent 100%);`}
    ${(props) =>
      props.direction === "right" &&
      `background-image: linear-gradient(to right, transparent 0%, #0c4a4e 100%);`}
  }

  @media (768px <= width <= 992px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    ${(props) =>
      props.direction === "left" &&
      `background-image: linear-gradient(to right, #0c4a4e 0%, transparent 100%);`}
    ${(props) =>
      props.direction === "right" &&
      `background-image: linear-gradient(to right, transparent 0%, #0c4a4e 100%);`}
  }

  @media (width >= 993px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    ${(props) =>
      props.direction === "left" &&
      `background-image: linear-gradient(to right, #0c4a4e 0%, transparent 100%);`}
    ${(props) =>
      props.direction === "right" &&
      `background-image: linear-gradient(to right, transparent 0%, #0c4a4e 100%);`}
  }
`;

const CompletedBadgeContainer = styled.div`
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
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.5));
  }

  @media (768px <= width <= 992px) {
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.5));
  }

  @media (width >= 993px) {
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.5));
  }
`;

export {
  ThumbnailPageContainer,
  ThumbnailPageImage,
  ThumbnailPageGradient,
  CompletedBadgeImage,
  CompletedBadgeContainer
};
