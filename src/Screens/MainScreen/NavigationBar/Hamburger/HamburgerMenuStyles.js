import styled from "styled-components";
import Constants from "../../../../Utilities/Constants";

const HamburgerMenuContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media screen and (min-width: 993px) {
  }
`;

const SignInButton = styled.p`
  @media screen and (max-width: 767px) {
    font-family: Jua, sans-serif;
    font-size: 14px;
    color: white;
    padding: 8px 20px;
    background-color: ${Constants.ACCENT_COLOR};
    border-radius: 6px;
    cursor: pointer;
    margin-right: 12px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-family: Jua, sans-serif;
    font-size: 14px;
    color: white;
    padding: 8px 20px;
    background-color: ${Constants.ACCENT_COLOR};
    border-radius: 6px;
    cursor: pointer;
    margin-right: 12px;
  }
  @media screen and (min-width: 993px) {
    font-family: Jua, sans-serif;
    font-size: 14px;
    color: white;
    padding: 8px 20px;
    background-color: ${Constants.ACCENT_COLOR};
    border-radius: 6px;
    cursor: pointer;
    margin-right: 12px;
  }
`;

const SignOutButton = styled.p`
  @media screen and (max-width: 767px) {
    font-family: Jua, sans-serif;
    font-size: 14px;
    color: white;
    padding: 8px 20px;
    background-color: ${Constants.ACCENT_COLOR};
    border-radius: 6px;
    cursor: pointer;
    margin-right: 12px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-family: Jua, sans-serif;
    font-size: 14px;
    color: white;
    padding: 8px 20px;
    background-color: ${Constants.ACCENT_COLOR};
    border-radius: 6px;
    cursor: pointer;
    margin-right: 12px;
  }
  @media screen and (min-width: 993px) {
    font-family: Jua, sans-serif;
    font-size: 14px;
    color: white;
    padding: 8px 20px;
    background-color: ${Constants.ACCENT_COLOR};
    border-radius: 6px;
    cursor: pointer;
    margin-right: 12px;
  }
`;

const AdministratorSiteText = styled.p`
  @media screen and (max-width: 767px) {
    font-size: 14px;
    color: ${Constants.CHARCOAL};
    cursor: pointer;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 14px;
    color: ${Constants.CHARCOAL};
    cursor: pointer;
  }
  @media screen and (min-width: 993px) {
    font-size: 14px;
    color: ${Constants.CHARCOAL};
    cursor: pointer;
  }
`;

export {
  HamburgerMenuContainer,
  SignInButton,
  SignOutButton,
  AdministratorSiteText
};
