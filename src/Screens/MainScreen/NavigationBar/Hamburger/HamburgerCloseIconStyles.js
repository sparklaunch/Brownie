import styled from "styled-components";

const HamburgerCloseIconImage = styled.img`
  @media (min-width: 480px) and (max-width: 767px) {
    cursor: pointer;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    cursor: pointer;
  }
  @media (width >= 993px) and (height >= 768px) {
    cursor: pointer;
  }
`;

export { HamburgerCloseIconImage };
