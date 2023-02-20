import styled from "styled-components";

const NavigationContentContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: none;
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`;

const HamburgerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: flex;
  }
  @media (min-width: 1280px) {
    display: none;
  }
`;

export { NavigationContentContainer, HamburgerContainer };
