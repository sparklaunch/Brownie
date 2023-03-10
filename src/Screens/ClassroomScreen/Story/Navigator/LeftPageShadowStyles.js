import styled from "styled-components";

const LeftPageShade = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 80%;
    background-image: linear-gradient(to right, transparent 0%, black 100%);
    opacity: 0.5;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 80%;
    background-image: linear-gradient(to right, transparent 0%, black 100%);
    opacity: 0.5;
  }

  @media screen and (min-width: 993px) {
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
