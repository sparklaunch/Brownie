import styled from "styled-components";

const ReadingMonkeyContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: 993px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ReadingMonkeyImage = styled.img`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
  }
`;

export { ReadingMonkeyContainer, ReadingMonkeyImage };
