import styled from "styled-components";

const WordLeftPageTurnerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    cursor: pointer;
  }
  @media (min-width: 993px) {
    cursor: pointer;
  }
`;

const WordLeftPageTurnerImage = styled.img`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
  }
`;

const RotatedWordLeftPageTurnerImage = styled.img`
  @media (min-width: 768px) and (max-width: 992px) {
    transform: rotate(180deg);
  }
  @media (min-width: 993px) {
    transform: rotate(180deg);
  }
`;

export {
  WordLeftPageTurnerContainer,
  WordLeftPageTurnerImage,
  RotatedWordLeftPageTurnerImage
};
