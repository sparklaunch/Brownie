import styled from "styled-components";

const HamburgerMenuContainer = styled.div`
  @media (min-width: 480px) and (max-width: 767px) {
  }
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
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
  }
  @media (min-width: 768px) and (max-width: 992px) {
    font-family: Jua, sans-serif;
    font-size: 14px;
    color: white;
    padding: 8px 20px;
    background-color: #1ab9c5;
    border-radius: 6px;
    cursor: pointer;
  }
  @media (min-width: 993px) {
    font-family: Jua, sans-serif;
    font-size: 14px;
    color: white;
    padding: 8px 20px;
    background-color: #1ab9c5;
    border-radius: 6px;
    cursor: pointer;
  }
`;

export { HamburgerMenuContainer, SignInButton };
