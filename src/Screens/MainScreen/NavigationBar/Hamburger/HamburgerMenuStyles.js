import styled from "styled-components";

const HamburgerMenuContainer = styled.div`
  @media (min-width: 480px) and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
  }
  @media (width >= 993px) and (height >= 768px) {
  }
`;

const SignInButton = styled.p`
  @media (min-width: 480px) and (max-width: 767px) {
    font-family: Jua, sans-serif;
    font-size: 14px;
    color: white;
    padding: 8px 20px;
    background-color: #1ab9c5;
    border-radius: 6px;
    cursor: pointer;
    margin-right: 12px;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-family: Jua, sans-serif;
    font-size: 14px;
    color: white;
    padding: 8px 20px;
    background-color: #1ab9c5;
    border-radius: 6px;
    cursor: pointer;
    margin-right: 12px;
  }
  @media (width >= 993px) and (height >= 768px) {
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

const InstructionsText = styled.p`
  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 14px;
    color: #3d3d3d;
    cursor: pointer;
    margin-right: 12px;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-size: 14px;
    color: #3d3d3d;
    cursor: pointer;
    margin-right: 12px;
  }
  @media (width >= 993px) and (height >= 768px) {
    font-size: 14px;
    color: #3d3d3d;
    cursor: pointer;
    margin-right: 12px;
  }
`;

const AdministratorSiteText = styled.p`
  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 14px;
    color: #3d3d3d;
    cursor: pointer;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-size: 14px;
    color: #3d3d3d;
    cursor: pointer;
  }
  @media (width >= 993px) and (height >= 768px) {
    font-size: 14px;
    color: #3d3d3d;
    cursor: pointer;
  }
`;

export {
  HamburgerMenuContainer,
  SignInButton,
  InstructionsText,
  AdministratorSiteText
};
