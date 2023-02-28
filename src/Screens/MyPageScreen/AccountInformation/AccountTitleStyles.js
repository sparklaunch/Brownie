import styled from "styled-components";

const AccountTitleContainer = styled.div`
  @media (480px <= width <= 767px) {
    text-align: center;
    margin-bottom: 40px;
  }
  @media (768px <= width <= 992px) {
    text-align: center;
    margin-bottom: 40px;
  }
  @media (width >= 993px) {
    text-align: center;
    margin-bottom: 40px;
  }
`;

const PasswordConfirmationTitle = styled.p`
  @media (480px <= width <= 767px) {
    font-family: "Jua", sans-serif;
    font-size: 32px;
    margin-bottom: 8px;
  }
  @media (768px <= width <= 992px) {
    font-family: "Jua", sans-serif;
    font-size: 32px;
    margin-bottom: 8px;
  }
  @media (width >= 993px) {
    font-family: "Jua", sans-serif;
    font-size: 32px;
    margin-bottom: 8px;
  }
`;

const PasswordConfirmationText = styled.p`
  @media (480px <= width <= 767px) {
    font-size: 18px;
    color: #707070;
  }
  @media (768px <= width <= 992px) {
    font-size: 18px;
    color: #707070;
  }
  @media (width >= 993px) {
    font-size: 18px;
    color: #707070;
  }
`;

export {
  AccountTitleContainer,
  PasswordConfirmationTitle,
  PasswordConfirmationText
};
