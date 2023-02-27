import styled from "styled-components";

const WordRightPageTurnerContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    cursor: pointer;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    cursor: pointer;
  }

  @media (min-width: 993px) and (min-height: 768px) {
    cursor: pointer;
  }
`;

const WordRightPageTurnerImage = styled.img`
  @media (width <= 767px), (height <= 479px) {
    width: 14px;
    height: 24px;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 14px;
    height: 24px;
  }

  @media (min-width: 993px) and (min-height: 768px) {
  }
`;

const RotatedWordRightPageTurnerImage = styled.img`
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

  @media (min-width: 993px) and (min-height: 768px) {
    transform: rotate(180deg);
  }
`;

export {
  WordRightPageTurnerContainer,
  WordRightPageTurnerImage,
  RotatedWordRightPageTurnerImage
};
