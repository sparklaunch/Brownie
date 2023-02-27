import styled from "styled-components";

const TryTitleContainer = styled.div`
  @media (width <= 767px) {
    margin: 48px 0 24px 0;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    margin: 48px 0 24px 0;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    margin: 48px 0 24px 0;
  }
`;

const TryTitleText = styled.p`
  @media (width <= 767px) {
    font-size: 32px;
    font-family: Jua, sans-serif;
    text-align: center;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-size: 32px;
    font-family: Jua, sans-serif;
    text-align: center;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    font-size: 32px;
    font-family: Jua, sans-serif;
    text-align: center;
  }
`;

export { TryTitleContainer, TryTitleText };
