import styled from "styled-components";

const ThumbnailContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: relative;
    width: 216px;
    height: 144px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 10px;
    cursor: pointer;
    overflow: clip;
    margin: 0 12px;
    ${(props) =>
      props.bordered
        ? `border: 4px solid #ffd53d;`
        : `border: 4px solid transparent;`}
  }
  @media (min-width: 993px) {
    position: relative;
    width: 216px;
    height: 144px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 10px;
    cursor: pointer;
    overflow: clip;
    margin: 0 12px;
    ${(props) =>
      props.bordered
        ? `border: 4px solid #ffd53d;`
        : `border: 4px solid transparent;`}
  }
`;

const CompletedBackdrop = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.5;
  }
  @media (min-width: 993px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.5;
  }
`;

const CompletedBadgeContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (min-width: 993px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const CompletedBadgeImage = styled.img`
  @media (min-width: 768px) and (max-width: 992px) {
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.5));
  }
  @media (min-width: 993px) {
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.5));
  }
`;

export {
  ThumbnailContainer,
  CompletedBackdrop,
  CompletedBadgeContainer,
  CompletedBadgeImage
};
