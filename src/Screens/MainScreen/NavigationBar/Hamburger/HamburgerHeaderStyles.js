import styled from "styled-components";

const HamburgerHeaderContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 993px) {
  }
`;

export { HamburgerHeaderContainer };
