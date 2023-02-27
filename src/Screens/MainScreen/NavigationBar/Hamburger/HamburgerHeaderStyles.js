import styled from "styled-components";

const HamburgerHeaderContainer = styled.div`
  @media (width >= 480px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media (width >= 993px) {
  }
`;

export { HamburgerHeaderContainer };
