import styled from "styled-components";

const NavigationContentContainer = styled.div`
  @media (768px <= width <= 992px) {
    display: none;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: column;
  }
`;

const HamburgerContainer = styled.div`
  @media (768px <= width <= 992px) {
    display: flex;
  }
  @media (width >= 993px) {
    display: none;
  }
`;

export { NavigationContentContainer, HamburgerContainer };
