import styled from "styled-components";

const HamburgerWrapper = styled.div`
  @media (480px <= width <= 767px) {
    padding: 20px 30px;
  }
  @media (768px <= width <= 992px) {
    padding: 20px 30px;
  }
  @media (width >= 993px) {
    padding: 20px 30px;
  }
`;

export { HamburgerWrapper };
