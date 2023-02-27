import styled from "styled-components";

const HomeButtonContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    cursor: pointer;
  }
  @media (width >= 993px) and (height >= 768px) {
    cursor: pointer;
  }
`;

const HomeButtonImage = styled.img`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 48px;
    height: 48px;
  }
  @media (width >= 993px) and (height >= 768px) {
    width: 48px;
    height: 48px;
  }
`;

export { HomeButtonContainer, HomeButtonImage };
