import styled from "styled-components";

const ReadingMonkeyContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: 993px) and (min-height: 768px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ReadingMonkeyImage = styled.img`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
  }
  @media (min-width: 993px) and (min-height: 768px) {
  }
`;

export { ReadingMonkeyContainer, ReadingMonkeyImage };
