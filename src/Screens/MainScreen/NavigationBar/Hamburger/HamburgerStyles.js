import styled from "styled-components";

const HamburgerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    cursor: pointer;
  }
  @media (min-width: 993px) {
    display: none;
  }
`;

const HamburgerIcon = styled.img`
  @media (min-width: 768px) and (max-width: 992px) {
    cursor: pointer;
  }
  @media (min-width: 993px) {
    cursor: pointer;
  }
`;

const DrawerContainer = styled.div`
  @media (min-width: 480px) and (max-width: 767px) {
    width: 100vw;
    height: 100vh;
    background-color: white;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    height: 100vh;
    background-color: white;
  }
  @media (min-width: 993px) {
  }
`;

export { HamburgerContainer, HamburgerIcon, DrawerContainer };
