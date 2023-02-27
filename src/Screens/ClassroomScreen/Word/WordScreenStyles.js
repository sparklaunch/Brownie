import styled from "styled-components";

const WordScreenContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: clip;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: clip;
  }

  @media (min-width: 993px) and (min-height: 768px) {
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: clip;
  }
`;

export { WordScreenContainer };
