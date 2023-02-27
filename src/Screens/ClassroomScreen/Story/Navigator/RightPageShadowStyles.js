import styled from "styled-components";

const RightPageShade = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 80%;
    left: 0;
    background-image: linear-gradient(to left, transparent 0%, black 100%);
    opacity: 0.5;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 80%;
    left: 0;
    background-image: linear-gradient(to left, transparent 0%, black 100%);
    opacity: 0.5;
  }
`;

export { RightPageShade };
