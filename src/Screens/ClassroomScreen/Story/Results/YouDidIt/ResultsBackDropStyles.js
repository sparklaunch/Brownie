import styled from "styled-components";

const ResultsBackDropContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    opacity: 0.5;
    z-index: 2;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    opacity: 0.5;
    z-index: 2;
  }

  @media (width >= 993px) and (height >= 768px) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    opacity: 0.5;
    border-radius: 20px;
  }
`;

export { ResultsBackDropContainer };
