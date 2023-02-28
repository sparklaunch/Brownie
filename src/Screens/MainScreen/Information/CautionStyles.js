import styled from "styled-components";

const CautionContainer = styled.div`
  @media (480px <= width <= 767px) {
  }
  @media (768px <= width <= 992px) {
  }
  @media (width >= 993px) {
  }
`;

const CautionTitle = styled.p`
  @media (480px <= width <= 767px) {
    background-color: #1ab9c5;
    display: inline-block;
    color: white;
    font-size: 20px;
    padding: 12px 20px;
    border-radius: 8px;
  }
  @media (768px <= width <= 992px) {
    background-color: #1ab9c5;
    display: inline-block;
    color: white;
    font-size: 20px;
    padding: 12px 20px;
    border-radius: 8px;
  }
  @media (width >= 993px) {
    background-color: #1ab9c5;
    display: inline-block;
    color: white;
    font-size: 20px;
    padding: 12px 20px;
    border-radius: 8px;
  }
`;

export { CautionContainer, CautionTitle };
