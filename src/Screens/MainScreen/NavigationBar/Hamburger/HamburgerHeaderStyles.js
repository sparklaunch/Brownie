import styled from "styled-components";

const HamburgerHeaderContainer = styled.div`
  @media (min-width: 480px) and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media (width >= 993px) and (height >= 768px) {
  }
`;

export { HamburgerHeaderContainer };
