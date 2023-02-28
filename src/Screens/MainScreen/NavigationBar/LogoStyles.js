import styled from "styled-components";

const LogoContainer = styled.div`
  @media (480px <= width <= 767px) {
    width: 118px;
  }
  @media (768px <= width <= 992px) {
    width: 118px;
  }
  @media (width >= 993px) {
    width: 158px;
  }
`;

const LogoImage = styled.img`
  @media (480px <= width <= 767px) {
  }
  @media (768px <= width <= 992px) {
  }
  @media (width >= 993px) {
  }
`;

export { LogoContainer, LogoImage };
