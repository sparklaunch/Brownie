import styled from "styled-components";
import Constants from "../../../../Utilities/Constants";

const ThumbnailPageContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: relative;
    overflow: clip;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: relative;
    overflow: clip;
  }

  @media screen and (min-width: 993px) {
    position: relative;
    overflow: clip;
  }
`;

const ThumbnailPageImage = styled.img`
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 993px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ThumbnailPageGradient = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    ${(props) =>
      props.direction === "left" &&
      `background-image: linear-gradient(to right, ${Constants.SEAWEED} 0%, transparent 100%);`}
    ${(props) =>
      props.direction === "right" &&
      `background-image: linear-gradient(to right, transparent 0%, ${Constants.SEAWEED} 100%);`}
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    ${(props) =>
      props.direction === "left" &&
      `background-image: linear-gradient(to right, ${Constants.SEAWEED} 0%, transparent 100%);`}
    ${(props) =>
      props.direction === "right" &&
      `background-image: linear-gradient(to right, transparent 0%, ${Constants.SEAWEED} 100%);`}
  }

  @media screen and (min-width: 993px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    ${(props) =>
      props.direction === "left" &&
      `background-image: linear-gradient(to right, ${Constants.SEAWEED} 0%, transparent 100%);`}
    ${(props) =>
      props.direction === "right" &&
      `background-image: linear-gradient(to right, transparent 0%, ${Constants.SEAWEED} 100%);`}
  }
`;

const CompletedBadgeContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: 993px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const CompletedBadgeImage = styled.img`
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
  }
  @media screen and (min-width: 993px) {
  }
`;

export {
  ThumbnailPageContainer,
  ThumbnailPageImage,
  ThumbnailPageGradient,
  CompletedBadgeImage,
  CompletedBadgeContainer
};
