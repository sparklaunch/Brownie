import styled from "styled-components";

const SignInScreenOuterContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 30px;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 32px 0;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 64px 0;
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
  }
  @media (768px <= width <= 992px) {
    width: 500px;
    border: 2px solid #dfdfdf;
    border-radius: 5px;
  }
  @media (width >= 993px) {
    width: 500px;
    border: 2px solid #dfdfdf;
    border-radius: 5px;
  }
`;

export {
  SignInScreenOuterContainer,
  SignInScreenInnerContainer,
  SignInScreenContainer
};
