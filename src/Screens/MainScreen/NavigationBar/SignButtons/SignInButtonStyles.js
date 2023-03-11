import styled from "styled-components";
import Constants from "../../../../Utilities/Constants";

const NavigationBarSignInButton = styled.button`
  @media screen and (max-width: 767px) {
    background-color: ${Constants.ACCENT_COLOR};
    font-family: Jua, sans-serif;
    font-size: 18px;
    width: 104px;
    height: 44px;
    border-radius: 8px;
    color: white;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    background-color: ${Constants.ACCENT_COLOR};
    font-family: Jua, sans-serif;
    font-size: 18px;
    width: 104px;
    height: 44px;
    border-radius: 8px;
    color: white;
  }
  @media screen and (min-width: 993px) {
    background-color: ${Constants.ACCENT_COLOR};
    font-family: Jua, sans-serif;
    font-size: 18px;
    width: 104px;
    height: 44px;
    border-radius: 8px;
    color: white;
  }
`;

export { NavigationBarSignInButton };
