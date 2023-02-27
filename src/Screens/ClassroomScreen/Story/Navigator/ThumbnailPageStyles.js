import styled from "styled-components";

const ThumbnailPageContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: relative;
    overflow: clip;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    position: relative;
    overflow: clip;
  }
`;

const ThumbnailPageImage = styled.img`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ThumbnailPageGradient = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
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
  @media (min-width: 993px) and (min-height: 768px) {
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

export { ThumbnailPageContainer, ThumbnailPageImage, ThumbnailPageGradient };
