import styled from "styled-components";

const NavigationBarSignInButton = styled.button`
  @media (480px <= width <= 767px) {
    background-color: #1ab9c5;
    filter: brightness(1) drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
    font-family: Jua, sans-serif;
    font-size: 18px;
    width: 104px;
    height: 44px;
    border-radius: 8px;
    color: white;
  }
  @media (768px <= width <= 992px) {
    background-color: #1ab9c5;
    filter: brightness(1) drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
    font-family: Jua, sans-serif;
    font-size: 18px;
    width: 104px;
    height: 44px;
    border-radius: 8px;
    color: white;
  }
  @media (width >= 993px) {
    background-color: #1ab9c5;
    filter: brightness(1) drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
    font-family: Jua, sans-serif;
    font-size: 18px;
    width: 104px;
    height: 44px;
    border-radius: 8px;
    color: white;
  }
`;

export { NavigationBarSignInButton };
