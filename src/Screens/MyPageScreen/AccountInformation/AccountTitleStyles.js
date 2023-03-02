import styled from "styled-components";

const AccountTitleContainer = styled.div`
  @media screen and (max-width: 767px) {
    text-align: center;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    text-align: center;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 993px) {
    text-align: center;
    margin-bottom: 40px;
  }
`;

const PasswordConfirmationTitle = styled.p`
  @media screen and (max-width: 767px) {
    font-family: "Jua", sans-serif;
    font-size: 24px;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-family: "Jua", sans-serif;
    font-size: 28px;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 993px) {
    font-family: "Jua", sans-serif;
    font-size: 32px;
    margin-bottom: 8px;
  }
`;

const PasswordConfirmationText = styled.p`
  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 1.5;
    color: #707070;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 16px;
    color: #707070;
  }
  @media screen and (min-width: 993px) {
    font-size: 18px;
    color: #707070;
  }
`;

export {
  AccountTitleContainer,
  PasswordConfirmationTitle,
  PasswordConfirmationText
};
