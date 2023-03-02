import styled from "styled-components";

const TryTitleContainer = styled.div`
  @media (width <= 767px) {
    margin: 48px 0 24px 0;
  }
  @media (768px <= width <= 992px) {
    margin: 48px 0 24px 0;
  }
  @media (width >= 993px) {
    margin: 48px 0 24px 0;
  }
`;

const TryTitleRectangle = styled.img`
  @media (width <= 767px) {
    margin: 0 auto 16px auto;
  }
  @media (768px <= width <= 992px) {
    margin: 0 auto 16px auto;
  }
  @media (width >= 993px) {
    margin: 0 auto 16px auto;
  }
`;

const TryTitleText = styled.p`
  @media (width <= 767px) {
    font-size: 24px;
    font-family: Jua, sans-serif;
    text-align: center;
  }
  @media (768px <= width <= 992px) {
    font-size: 32px;
    font-family: Jua, sans-serif;
    text-align: center;
  }
  @media (width >= 993px) {
    font-size: 32px;
    font-family: Jua, sans-serif;
    text-align: center;
  }
`;

export { TryTitleContainer, TryTitleText, TryTitleRectangle };
