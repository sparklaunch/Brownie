import styled from "styled-components";

const HamburgerItemsContainer = styled.div`
  @media (width >= 480px) {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  }
`;

export { HamburgerItemsContainer };
