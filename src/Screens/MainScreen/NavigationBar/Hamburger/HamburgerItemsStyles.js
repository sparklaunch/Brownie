import styled from "styled-components";

const HamburgerItemsContainer = styled.div`
  @media (min-width: 480px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  }
  @media (width >= 993px) and (height >= 768px) {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  }
`;

export { HamburgerItemsContainer };
