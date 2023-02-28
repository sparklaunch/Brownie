import styled from "styled-components";

const SignInFormOuterContainer = styled.div`
  @media (480px <= width <= 767px) {
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
  }
  @media (768px <= width <= 992px) {
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
  }
  @media (width >= 993px) {
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
  }
`;

const SignInFormInnerContainer = styled.div`
  @media (480px <= width <= 767px) {
    position: relative;
    width: 300px;
    height: 320px;
    border-radius: 8px;
    overflow: clip;
  }
  @media (768px <= width <= 992px) {
    position: relative;
    width: 300px;
    height: 320px;
    border-radius: 8px;
    overflow: clip;
  }
  @media (width >= 993px) {
    position: relative;
    width: 300px;
    height: 320px;
    border-radius: 8px;
    overflow: clip;
  }
`;

const FormContainer = styled.div`
  @media (480px <= width <= 767px) {
    position: absolute;
    padding: 16px;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @media (768px <= width <= 992px) {
    position: absolute;
    padding: 16px;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @media (width >= 993px) {
    position: absolute;
    padding: 16px;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

export { SignInFormOuterContainer, SignInFormInnerContainer, FormContainer };
