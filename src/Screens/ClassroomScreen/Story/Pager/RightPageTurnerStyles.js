import styled from "styled-components";

const RightPageTurnerContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    cursor: pointer;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    cursor: pointer;
  }

  @media (width >= 993px) and (height >= 768px) {
    cursor: pointer;
  }
`;

const RightPageTurnerImage = styled.img`
  @media (width <= 767px), (height <= 479px) {
    width: 14px;
    height: 24px;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 14px;
    height: 24px;
  }

  @media (width >= 993px) and (height >= 768px) {
  }
`;

const RotatedRightPageTurnerImage = styled.img`
  @media (width <= 767px), (height <= 479px) {
    transform: rotate(180deg);
    width: 14px;
    height: 24px;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    transform: rotate(180deg);
    width: 14px;
    height: 24px;
  }

  @media (width >= 993px) and (height >= 768px) {
    transform: rotate(180deg);
  }
`;

export {
  RightPageTurnerContainer,
  RightPageTurnerImage,
  RotatedRightPageTurnerImage
};
