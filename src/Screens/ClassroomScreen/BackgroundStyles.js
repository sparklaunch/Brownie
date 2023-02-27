import styled from "styled-components";

const BackgroundPlaceholder = styled.div`
  @media (width <= 767px) {
    background-color: #e8f6f8;
    width: 100vw;
    height: 100vh;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    background-color: #e8f6f8;
    width: 100vw;
    height: 100vh;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    background-color: #e8f6f8;
    width: 100vw;
    height: 100vh;
  }
`;

export { BackgroundPlaceholder };
