import styled from "styled-components";

const HamburgerContainer = styled.div`
  @media screen and (max-width: 767px) {
    cursor: pointer;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    cursor: pointer;
  }
  @media screen and (min-width: 993px) {
    display: none;
  }
`;

const HamburgerIcon = styled.img`
  @media screen and (max-width: 767px) {
    cursor: pointer;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    cursor: pointer;
  }
  @media screen and (min-width: 993px) {
    cursor: pointer;
  }
`;

const DrawerContainer = styled.div`
  @media screen and (max-width: 767px) {
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
    background-color: white;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 400px;
    height: calc(var(--vh, 1vh) * 100);
    background-color: white;
  }
  @media screen and (min-width: 993px) {
  }
`;

export { HamburgerContainer, HamburgerIcon, DrawerContainer };
