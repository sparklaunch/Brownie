import styled from "styled-components";

const HamburgerContainer = styled.div`
  @media (480px <= width <= 767px) {
    cursor: pointer;
  }
  @media (768px <= width <= 992px) {
    cursor: pointer;
  }
  @media (width >= 993px) {
    display: none;
  }
`;

const HamburgerIcon = styled.img`
  @media (480px <= width <= 767px) {
    cursor: pointer;
  }
  @media (768px <= width <= 992px) {
    cursor: pointer;
  }
  @media (width >= 993px) {
    cursor: pointer;
  }
`;

const DrawerContainer = styled.div`
  @media (480px <= width <= 767px) {
    width: 100vw;
    height: 100vh;
    background-color: white;
  }
  @media (768px <= width <= 992px) {
    height: 100vh;
    background-color: white;
  }
  @media (width >= 993px) {
  }
`;

export { HamburgerContainer, HamburgerIcon, DrawerContainer };
