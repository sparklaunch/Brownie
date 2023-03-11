import styled from "styled-components";

const NavigationContentContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: none;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: column;
  }
`;

const HamburgerContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
  }
  @media screen and (min-width: 993px) {
    display: none;
  }
`;

export { NavigationContentContainer, HamburgerContainer };
