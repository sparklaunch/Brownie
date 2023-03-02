import styled from "styled-components";

const LogoContainer = styled.div`
  @media screen and (max-width: 767px) {
    width: 118px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 118px;
  }
  @media screen and (min-width: 993px) {
    width: 158px;
  }
`;

const LogoImage = styled.img`
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
  }
  @media screen and (min-width: 993px) {
  }
`;

export { LogoContainer, LogoImage };
