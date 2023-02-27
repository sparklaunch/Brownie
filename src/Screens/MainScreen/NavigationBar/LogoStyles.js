import styled from "styled-components";

const LogoContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 118px;
  }
  @media (width >= 993px) and (height >= 768px) {
    width: 158px;
  }
`;

export { LogoContainer };
