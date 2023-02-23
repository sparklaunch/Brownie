import styled from "styled-components";

const CautionContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
  }
`;

const CautionTitle = styled.p`
  @media (min-width: 768px) and (max-width: 992px) {
    background-color: #1ab9c5;
    display: inline-block;
    color: white;
    font-size: 20px;
    padding: 12px 20px;
    border-radius: 8px;
  }
  @media (min-width: 993px) {
    background-color: #1ab9c5;
    display: inline-block;
    color: white;
    font-size: 20px;
    padding: 12px 20px;
    border-radius: 8px;
  }
`;

export { CautionContainer, CautionTitle };
