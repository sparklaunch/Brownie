import styled from "styled-components";

const HamburgerWrapper = styled.div`
  @media (width >= 480px) {
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
