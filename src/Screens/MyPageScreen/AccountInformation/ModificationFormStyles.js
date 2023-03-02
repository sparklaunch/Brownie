import styled from "styled-components";

const ModificationFormOuterContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const ModificationFormInnerContainer = styled.div`
  @media (480px <= width <= 767px) {
    padding-top: 12px;
    width: 100%;
  }
  @media (768px <= width <= 992px) {
    padding-top: 12px;
    width: 100%;
  }
  @media (width >= 993px) {
    padding-top: 12px;
    width: 500px;
  }
`;

const ModificationTitle = styled.p`
  @media (480px <= width <= 767px) {
    text-align: center;
    font-family: "Jua", sans-serif;
    font-size: 24px;
    margin-bottom: 32px;
  }
  @media (768px <= width <= 992px) {
    text-align: center;
    font-family: "Jua", sans-serif;
    font-size: 28px;
    margin-bottom: 32px;
  }
  @media (width >= 993px) {
    text-align: center;
    font-family: "Jua", sans-serif;
    font-size: 32px;
    margin-bottom: 32px;
  }
`;

const TextCenterContainer = styled.div`
  @media (480px <= width <= 767px) {
    text-align: center;
  }
  @media (768px <= width <= 992px) {
    text-align: center;
  }
  @media (width >= 993px) {
    text-align: center;
  }
`;

const PasswordNoticeText = styled.p`
  @media (480px <= width <= 767px) {
    margin-left: 23px;
    font-size: 13px;
    margin-bottom: 3px;
    color: #acacac;
  }
  @media (768px <= width <= 992px) {
    margin-left: 23px;
    font-size: 13px;
    margin-bottom: 3px;
    color: #acacac;
  }
  @media (width >= 993px) {
    margin-left: 23px;
    font-size: 13px;
    margin-bottom: 3px;
    color: #acacac;
  }
`;

export {
  PasswordNoticeText,
  ModificationTitle,
  ModificationFormOuterContainer,
  ModificationFormInnerContainer,
  TextCenterContainer
};
