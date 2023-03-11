import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const SignInFormContainer = styled.div`
  @media screen and (max-width: 767px) {
    background-color: ${Constants.WHITE};
    padding: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    background-color: ${Constants.WHITE};
    padding: 20px;
  }
  @media screen and (min-width: 993px) {
    background-color: ${Constants.WHITE};
    padding: 20px;
  }
`;

export { SignInFormContainer };
