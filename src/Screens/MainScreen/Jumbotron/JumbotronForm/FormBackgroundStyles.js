import styled from "styled-components";

const FormBackgroundContainer = styled.div`
  @media (480px <= width <= 767px) {
    position: absolute;
    background-color: black;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @media (768px <= width <= 992px) {
    position: absolute;
    background-color: black;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @media (width >= 993px) {
    position: absolute;
    background-color: black;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

export { FormBackgroundContainer };
