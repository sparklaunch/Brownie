import styled from "styled-components";

const HamburgerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    cursor: pointer;
  }
  @media (min-width: 993px) {
    display: none;
  }
`;

export { HamburgerContainer };
