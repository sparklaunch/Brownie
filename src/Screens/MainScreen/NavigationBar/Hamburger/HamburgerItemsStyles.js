import styled from "styled-components";

const HamburgerItemsContainer = styled.div`
  @media (min-width: 480px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 993px) {
    display: flex;
    flex-direction: column;
  }
`;

export { HamburgerItemsContainer };
