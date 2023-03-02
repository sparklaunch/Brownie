import styled from "styled-components";

const ReadingMonkeyContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }

  @media screen and (min-width: 993px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ReadingMonkeyImage = styled.img`
  @media screen and (max-width: 767px) {
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
  }

  @media screen and (min-width: 993px) {
  }
`;

export { ReadingMonkeyContainer, ReadingMonkeyImage };
