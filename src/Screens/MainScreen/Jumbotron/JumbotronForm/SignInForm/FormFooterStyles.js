import styled from "styled-components";

const FormFooterContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
  }
`;

const SignUpButton = styled.p`
  @media (480px <= width <= 767px) {
    color: #dfdfdf;
    font-weight: lighter;
    font-size: 14px;
    cursor: pointer;
  }
  @media (768px <= width <= 992px) {
    color: #dfdfdf;
    font-weight: lighter;
    font-size: 14px;
    cursor: pointer;
  }
  @media (width >= 993px) {
    color: #dfdfdf;
    font-weight: lighter;
    font-size: 14px;
    cursor: pointer;
  }
`;

export { FormFooterContainer, SignUpButton };
