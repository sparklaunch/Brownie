import styled from "styled-components";

const SignInFindAccountContainer = styled.div`
  @media (480px <= width <= 767px) {
    font-size: 14px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (768px <= width <= 992px) {
    font-size: 14px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (width >= 993px) {
    font-size: 14px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const FindIDLink = styled.p`
  @media (480px <= width <= 767px) {
    padding-right: 12px;
    border-right: 2px solid #dfdfdf;
    cursor: pointer;
  }
  @media (768px <= width <= 992px) {
    padding-right: 12px;
    border-right: 2px solid #dfdfdf;
    cursor: pointer;
  }
  @media (width >= 993px) {
    padding-right: 12px;
    border-right: 2px solid #dfdfdf;
    cursor: pointer;
  }
`;

const FindPasswordLink = styled.p`
  @media (480px <= width <= 767px) {
    padding-left: 12px;
  }
  @media (768px <= width <= 992px) {
    padding-left: 12px;
  }
  @media (width >= 993px) {
    padding-left: 12px;
  }
`;

export { SignInFindAccountContainer, FindIDLink, FindPasswordLink };
