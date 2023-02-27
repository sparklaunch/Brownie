import styled from "styled-components";

const NavigationContentContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: none;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const HamburgerContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    display: none;
  }
`;

export { NavigationContentContainer, HamburgerContainer };
