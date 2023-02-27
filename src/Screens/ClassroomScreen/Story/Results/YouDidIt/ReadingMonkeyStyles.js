import styled from "styled-components";

const ReadingMonkeyContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }

  @media (width >= 993px) and (height >= 768px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ReadingMonkeyImage = styled.img`
  @media (width <= 767px), (height <= 479px) {
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
  }

  @media (width >= 993px) and (height >= 768px) {
  }
`;

export { ReadingMonkeyContainer, ReadingMonkeyImage };
