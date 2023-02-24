import styled from "styled-components";

const HamburgerCloseIconImage = styled.img`
  @media (min-width: 480px) and (max-width: 767px) {
    cursor: pointer;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    cursor: pointer;
  }
  @media (min-width: 993px) {
    cursor: pointer;
  }
`;

export { HamburgerCloseIconImage };
