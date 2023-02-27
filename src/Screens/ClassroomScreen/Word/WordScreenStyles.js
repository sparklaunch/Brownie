import styled from "styled-components";

const WordScreenContainer = styled.div`
  @media (width <= 767px) {
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: clip;
  }

  @media (768px <= width <= 992px) {
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: clip;
  }

  @media (width >= 993px) {
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: clip;
  }
`;

export { WordScreenContainer };
