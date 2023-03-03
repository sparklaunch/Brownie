import styled from "styled-components";
import Constants from "../../../../../Utilities/Constants";

const FormFooterContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
  }
`;

const SignUpButton = styled.p`
  @media screen and (max-width: 767px) {
    color: ${Constants.LIGHT_GRAY};
    font-weight: lighter;
    font-size: 14px;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    color: ${Constants.LIGHT_GRAY};
    font-weight: lighter;
    font-size: 14px;
    cursor: pointer;
  }
  @media screen and (min-width: 993px) {
    color: ${Constants.LIGHT_GRAY};
    font-weight: lighter;
    font-size: 14px;
    cursor: pointer;
  }
`;

export { FormFooterContainer, SignUpButton };
