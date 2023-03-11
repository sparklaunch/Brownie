import styled from "styled-components";

const HamburgerWrapper = styled.div`
  @media screen and (max-width: 767px) {
    padding: 20px 30px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    padding: 20px 30px;
  }
  @media screen and (min-width: 993px) {
    padding: 20px 30px;
  }
`;

export { HamburgerWrapper };
