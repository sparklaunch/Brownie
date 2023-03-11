import styled from "styled-components";

const RightPageTurnerContainer = styled.div`
  @media screen and (max-width: 767px) {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    cursor: pointer;
  }

  @media screen and (min-width: 993px) {
    cursor: pointer;
  }
`;

const RightPageTurnerImage = styled.img`
  @media screen and (max-width: 767px) {
    width: 14px;
    height: 24px;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 14px;
    height: 24px;
  }

  @media screen and (min-width: 993px) {
  }
`;

const RotatedRightPageTurnerImage = styled.img`
  @media screen and (max-width: 767px) {
    transform: rotate(180deg);
    width: 14px;
    height: 24px;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    transform: rotate(180deg);
    width: 14px;
    height: 24px;
  }

  @media screen and (min-width: 993px) {
    transform: rotate(180deg);
  }
`;

export {
  RightPageTurnerContainer,
  RightPageTurnerImage,
  RotatedRightPageTurnerImage
};
