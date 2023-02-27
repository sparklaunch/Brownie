import styled from "styled-components";

const LeftPageShade = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 80%;
    background-image: linear-gradient(to right, transparent 0%, black 100%);
    opacity: 0.5;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 80%;
    background-image: linear-gradient(to right, transparent 0%, black 100%);
    opacity: 0.5;
  }

  @media (width >= 993px) and (height >= 768px) {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 80%;
    background-image: linear-gradient(to right, transparent 0%, black 100%);
    opacity: 0.5;
  }
`;

export { LeftPageShade };
