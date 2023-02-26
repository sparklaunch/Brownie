import styled from "styled-components";

const ThumbnailPageContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: relative;
    overflow: clip;
  }
  @media (min-width: 993px) {
    position: relative;
    overflow: clip;
  }
`;

const ThumbnailPageImage = styled.img`
  @media (min-width: 768px) and (max-width: 992px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 993px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ThumbnailPageGradient = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
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
  @media (min-width: 993px) {
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
