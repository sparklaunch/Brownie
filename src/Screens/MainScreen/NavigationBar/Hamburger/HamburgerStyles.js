import styled from "styled-components";

const HamburgerContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    cursor: pointer;
  }
  @media (width >= 993px) and (height >= 768px) {
    display: none;
  }
`;

const HamburgerIcon = styled.img`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    cursor: pointer;
  }
  @media (width >= 993px) and (height >= 768px) {
    cursor: pointer;
  }
`;

const DrawerContainer = styled.div`
  @media (min-width: 480px) and (max-width: 767px) {
    width: 100vw;
    height: 100vh;
    background-color: white;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    height: 100vh;
    background-color: white;
  }
  @media (width >= 993px) and (height >= 768px) {
  }
`;

export { HamburgerContainer, HamburgerIcon, DrawerContainer };
