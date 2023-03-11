import styled from "styled-components";

const RightPageShade = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 80%;
    left: 0;
    background-image: linear-gradient(to left, transparent 0%, black 100%);
    opacity: 0.5;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 80%;
    left: 0;
    background-image: linear-gradient(to left, transparent 0%, black 100%);
    opacity: 0.5;
  }

  @media screen and (min-width: 993px) {
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
