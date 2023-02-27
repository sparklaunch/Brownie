import styled from "styled-components";

const WordLeftPageTurnerContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    cursor: pointer;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    cursor: pointer;
  }
`;

const WordLeftPageTurnerImage = styled.img`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 14px;
    height: 24px;
  }
  @media (min-width: 993px) and (min-height: 768px) {
  }
`;

const RotatedWordLeftPageTurnerImage = styled.img`
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
  WordLeftPageTurnerContainer,
  WordLeftPageTurnerImage,
  RotatedWordLeftPageTurnerImage
};
