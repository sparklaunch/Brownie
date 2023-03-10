import styled from "styled-components";

const WelcomeOuterContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: none;
  }
  @media screen and (min-width: 993px) {
    position: relative;
    width: 300px;
    height: 240px;
    border-radius: 8px;
    overflow: clip;
  }
`;

const WelcomeInnerContainer = styled.div`
  @media screen and (max-width: 767px) {
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
  @media screen and (min-width: 768px) and (max-width: 992px) {
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
  @media screen and (min-width: 993px) {
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
