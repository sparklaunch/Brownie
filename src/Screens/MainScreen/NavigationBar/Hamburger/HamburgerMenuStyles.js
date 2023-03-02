import styled from "styled-components";

const HamburgerMenuContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media (width >= 993px) {
  }
`;

const SignInButton = styled.p`
  @media (480px <= width <= 767px) {
    font-family: Jua, sans-serif;
    font-size: 14px;
    color: white;
    padding: 8px 20px;
    background-color: #1ab9c5;
    border-radius: 6px;
    cursor: pointer;
    margin-right: 12px;
  }
  @media (768px <= width <= 992px) {
    font-family: Jua, sans-serif;
    font-size: 14px;
    color: white;
    padding: 8px 20px;
    background-color: #1ab9c5;
    border-radius: 6px;
    cursor: pointer;
    margin-right: 12px;
  }
  @media (width >= 993px) {
    font-family: Jua, sans-serif;
    font-size: 14px;
    color: white;
    padding: 8px 20px;
    background-color: #1ab9c5;
    border-radius: 6px;
    cursor: pointer;
    margin-right: 12px;
  }
`;

const SignOutButton = styled.p`
  @media (480px <= width <= 767px) {
    font-family: Jua, sans-serif;
    font-size: 14px;
    color: white;
    padding: 8px 20px;
    background-color: #1ab9c5;
    border-radius: 6px;
    cursor: pointer;
    margin-right: 12px;
  }
  @media (768px <= width <= 992px) {
    font-family: Jua, sans-serif;
    font-size: 14px;
    color: white;
    padding: 8px 20px;
    background-color: #1ab9c5;
    border-radius: 6px;
    cursor: pointer;
    margin-right: 12px;
  }
  @media (width >= 993px) {
    font-family: Jua, sans-serif;
    font-size: 14px;
    color: white;
    padding: 8px 20px;
    background-color: #1ab9c5;
    border-radius: 6px;
    cursor: pointer;
    margin-right: 12px;
  }
`;

const AdministratorSiteText = styled.p`
  @media (480px <= width <= 767px) {
    font-size: 14px;
    color: #3d3d3d;
    cursor: pointer;
  }
  @media (768px <= width <= 992px) {
    font-size: 14px;
    color: #3d3d3d;
    cursor: pointer;
  }
  @media (width >= 993px) {
    font-size: 14px;
    color: #3d3d3d;
    cursor: pointer;
  }
`;

export {
  HamburgerMenuContainer,
  SignInButton,
  SignOutButton,
  AdministratorSiteText
};
