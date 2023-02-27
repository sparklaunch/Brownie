import styled from "styled-components";

const LogoContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 118px;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    width: 158px;
  }
`;

export { LogoContainer };
