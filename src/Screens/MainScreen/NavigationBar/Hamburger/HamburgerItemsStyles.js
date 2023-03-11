import styled from "styled-components";

const HamburgerItemsContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  }
`;

export { HamburgerItemsContainer };
