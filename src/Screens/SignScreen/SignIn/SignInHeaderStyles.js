import styled from "styled-components";

const SignInHeaderContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 12px;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 12px;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 12px;
  }
`;

const SignInText = styled.p`
  @media (480px <= width <= 767px) {
    font-size: 18px;
  }
  @media (768px <= width <= 992px) {
    font-size: 18px;
  }
  @media (width >= 993px) {
    font-size: 18px;
  }
`;

export { SignInHeaderContainer, SignInText };
