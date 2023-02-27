import styled from "styled-components";

const HamburgerWrapper = styled.div`
  @media (min-width: 480px) and (max-width: 767px) {
    padding: 20px 30px;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    padding: 20px 30px;
  }
  @media (width >= 993px) and (height >= 768px) {
    padding: 20px 30px;
  }
`;

export { HamburgerWrapper };
