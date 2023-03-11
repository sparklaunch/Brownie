import styled from "styled-components";

const ModificationFormOuterContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const ModificationFormInnerContainer = styled.div`
  @media screen and (max-width: 767px) {
    padding-top: 12px;
    width: 100%;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    padding-top: 12px;
    width: 100%;
  }
  @media screen and (min-width: 993px) {
    padding-top: 12px;
    width: 500px;
  }
`;

const ModificationTitle = styled.p`
  @media screen and (max-width: 767px) {
    text-align: center;
    font-family: "Jua", sans-serif;
    font-size: 24px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    text-align: center;
    font-family: "Jua", sans-serif;
    font-size: 28px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 993px) {
    text-align: center;
    font-family: "Jua", sans-serif;
    font-size: 32px;
    margin-bottom: 32px;
  }
`;

const TextCenterContainer = styled.div`
  @media screen and (max-width: 767px) {
    text-align: center;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    text-align: center;
  }
  @media screen and (min-width: 993px) {
    text-align: center;
  }
`;

export {
  ModificationTitle,
  ModificationFormOuterContainer,
  ModificationFormInnerContainer,
  TextCenterContainer
};
