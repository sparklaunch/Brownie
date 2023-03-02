import styled from "styled-components";

const FormHeaderContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px;
    margin-top: 14px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px;
    margin-top: 14px;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px;
    margin-top: 14px;
  }
`;

const FormHeaderTitle = styled.p`
  @media screen and (max-width: 767px) {
    color: #f5f5f5;
    font-family: "Jua", sans-serif;
    font-size: 20px;
    margin-bottom: 6px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    color: #f5f5f5;
    font-family: "Jua", sans-serif;
    font-size: 20px;
    margin-bottom: 6px;
  }
  @media screen and (min-width: 993px) {
    color: #f5f5f5;
    font-family: "Jua", sans-serif;
    font-size: 20px;
    margin-bottom: 6px;
  }
`;

const FormHeaderText = styled.p`
  @media screen and (max-width: 767px) {
    color: #f5f5f5;
    font-size: 14px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    color: #f5f5f5;
    font-size: 14px;
  }
  @media screen and (min-width: 993px) {
    color: #f5f5f5;
    font-size: 14px;
  }
`;

export { FormHeaderContainer, FormHeaderTitle, FormHeaderText };
