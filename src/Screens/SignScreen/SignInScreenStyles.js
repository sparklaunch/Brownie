import styled from "styled-components";
import Constants from "../../Utilities/Constants";

const SignInScreenOuterContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 32px 0;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 64px 0;
  }
`;

const SignInScreenInnerContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    overflow: clip;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: clip;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: clip;
  }
`;

const SignInScreenContainer = styled.div`
  @media screen and (max-width: 767px) {
    width: 100%;
    border: 2px solid ${Constants.LIGHT_GRAY};
    border-radius: 5px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 500px;
    border: 2px solid ${Constants.LIGHT_GRAY};
    border-radius: 5px;
  }
  @media screen and (min-width: 993px) {
    width: 500px;
    border: 2px solid ${Constants.LIGHT_GRAY};
    border-radius: 5px;
  }
`;

export {
  SignInScreenOuterContainer,
  SignInScreenInnerContainer,
  SignInScreenContainer
};
