import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const CautionContainer = styled.div`
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
  }
  @media screen and (min-width: 993px) {
  }
`;

const CautionTitle = styled.p`
  @media screen and (max-width: 767px) {
    background-color: ${Constants.ACCENT_COLOR};
    display: inline-block;
    color: white;
    font-size: 20px;
    padding: 12px 20px;
    border-radius: 8px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    background-color: ${Constants.ACCENT_COLOR};
    display: inline-block;
    color: white;
    font-size: 20px;
    padding: 12px 20px;
    border-radius: 8px;
  }
  @media screen and (min-width: 993px) {
    background-color: ${Constants.ACCENT_COLOR};
    display: inline-block;
    color: white;
    font-size: 20px;
    padding: 12px 20px;
    border-radius: 8px;
  }
`;

export { CautionContainer, CautionTitle };
