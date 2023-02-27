import styled from "styled-components";

const HamburgerCloseIconImage = styled.img`
  @media (width >= 480px) {
    cursor: pointer;
  }
  @media (768px <= width <= 992px) {
    cursor: pointer;
  }
  @media (width >= 993px) {
    cursor: pointer;
  }
`;

export { HamburgerCloseIconImage };
