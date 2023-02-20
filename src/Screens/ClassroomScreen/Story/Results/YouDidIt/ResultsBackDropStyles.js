import styled from "styled-components";

const ResultsBackDropContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    opacity: 0.5;
  }
  @media (min-width: 1280px) {
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
