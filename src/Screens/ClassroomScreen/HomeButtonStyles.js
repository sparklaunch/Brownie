import styled from "styled-components";

const HomeButtonContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    cursor: pointer;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    cursor: pointer;
  }
`;

const HomeButtonImage = styled.img`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
  }
  @media (min-width: 993px) and (min-height: 768px) {
  }
`;

export { HomeButtonContainer, HomeButtonImage };
