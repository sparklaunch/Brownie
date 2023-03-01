import styled from "styled-components";

const WelcomeOuterContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: none;
  }
  @media (768px <= width <= 992px) {
    display: none;
  }
  @media (width >= 993px) {
    position: relative;
    width: 300px;
    height: 240px;
    border-radius: 8px;
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
    overflow: clip;
  }
`;

const WelcomeInnerContainer = styled.div`
  @media (480px <= width <= 767px) {
    position: absolute;
    padding: 16px;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }
  @media (768px <= width <= 992px) {
    position: absolute;
    padding: 16px;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }
  @media (width >= 993px) {
    position: absolute;
    padding: 16px;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }
`;

export { WelcomeOuterContainer, WelcomeInnerContainer };
