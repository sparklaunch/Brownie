import styled from "styled-components";

const NavigationContentContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: none;
  }
  @media (width >= 993px) and (height >= 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const HamburgerContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
  }
  @media (width >= 993px) and (height >= 768px) {
    display: none;
  }
`;

export { NavigationContentContainer, HamburgerContainer };
