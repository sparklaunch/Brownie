import styled from "styled-components";

const SignInScreenOuterContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }
`;

const SignInScreenInnerContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: clip;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: clip;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: clip;
  }
`;

const SignInScreenContainer = styled.div`
  @media (480px <= width <= 767px) {
    width: 500px;
    border: 2px solid #dfdfdf;
    border-radius: 5px;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25));
  }
  @media (768px <= width <= 992px) {
    width: 500px;
    border: 2px solid #dfdfdf;
    border-radius: 5px;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25));
  }
  @media (width >= 993px) {
    width: 500px;
    border: 2px solid #dfdfdf;
    border-radius: 5px;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25));
  }
`;

export {
  SignInScreenOuterContainer,
  SignInScreenInnerContainer,
  SignInScreenContainer
};
