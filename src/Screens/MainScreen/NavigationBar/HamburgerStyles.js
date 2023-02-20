import styled from "styled-components";

const HamburgerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    cursor: pointer;
  }
  @media (min-width: 1280px) {
    display: none;
  }
`;

export { HamburgerContainer };
