import styled from "styled-components";

const HomeButtonContainer = styled.div`
  @media (480px <= width <= 767px) {
    cursor: pointer;
  }
  @media (768px <= width <= 992px) {
    cursor: pointer;
  }
  @media (width >= 993px) {
    cursor: pointer;
  }
`;

const HomeButtonImage = styled.img`
  @media (480px <= width <= 767px) {
    width: 48px;
    height: 48px;
  }
  @media (768px <= width <= 992px) {
    width: 48px;
    height: 48px;
  }
  @media (width >= 993px) {
    width: 48px;
    height: 48px;
  }
`;

export { HomeButtonContainer, HomeButtonImage };
