import styled from "styled-components";

const SignUpHeaderContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 12px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 12px;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 12px;
  }
`;

const SignUpText = styled.p`
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 18px;
  }
  @media screen and (min-width: 993px) {
    font-size: 18px;
  }
`;

export { SignUpHeaderContainer, SignUpText };
