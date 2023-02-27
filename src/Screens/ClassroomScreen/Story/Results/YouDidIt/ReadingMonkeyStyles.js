import styled from "styled-components";

const ReadingMonkeyContainer = styled.div`
  @media (width <= 767px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }

  @media (768px <= width <= 992px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }

  @media (width >= 993px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ReadingMonkeyImage = styled.img`
  @media (width <= 767px) {
  }

  @media (768px <= width <= 992px) {
  }

  @media (width >= 993px) {
  }
`;

export { ReadingMonkeyContainer, ReadingMonkeyImage };
