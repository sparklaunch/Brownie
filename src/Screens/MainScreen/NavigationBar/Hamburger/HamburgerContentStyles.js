import styled from "styled-components";

const HamburgerWrapper = styled.div`
  @media (min-width: 480px) and (max-width: 767px) {
    padding: 20px 30px;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    padding: 20px 30px;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    padding: 20px 30px;
  }
`;

export { HamburgerWrapper };
