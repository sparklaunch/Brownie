import styled from "styled-components";

const LeftPageTurnerContainer = styled.div`
  @media (width <= 767px) {
    cursor: pointer;
  }

  @media (768px <= width <= 992px) {
    cursor: pointer;
  }

  @media (width >= 993px) {
    cursor: pointer;
  }
`;

const RotatedLeftPageTurnerImage = styled.img`
  @media (width <= 767px) {
    transform: rotate(180deg);
    width: 14px;
    height: 24px;
  }

  @media (768px <= width <= 992px) {
    transform: rotate(180deg);
    width: 14px;
    height: 24px;
  }

  @media (width >= 993px) {
    transform: rotate(180deg);
  }
`;

const LeftPageTurnerImage = styled.img`
  @media (width <= 767px) {
    width: 14px;
    height: 24px;
  }

  @media (768px <= width <= 992px) {
    width: 14px;
    height: 24px;
  }

  @media (width >= 993px) {
  }
`;

export {
  LeftPageTurnerContainer,
  RotatedLeftPageTurnerImage,
  LeftPageTurnerImage
};
