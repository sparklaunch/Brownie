import styled from "styled-components";

const CautionContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
  }
  @media (width >= 993px) and (height >= 768px) {
  }
`;

const CautionTitle = styled.p`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    background-color: #1ab9c5;
    display: inline-block;
    color: white;
    font-size: 20px;
    padding: 12px 20px;
    border-radius: 8px;
  }
  @media (width >= 993px) and (height >= 768px) {
    background-color: #1ab9c5;
    display: inline-block;
    color: white;
    font-size: 20px;
    padding: 12px 20px;
    border-radius: 8px;
  }
`;

export { CautionContainer, CautionTitle };
