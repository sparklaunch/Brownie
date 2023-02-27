import styled from "styled-components";

const CardTitleText = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-size: 18px;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    font-size: 18px;
  }
`;

const CardTitleTextSpan = styled.span`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-family: Jua, sans-serif;
    font-size: 26px;
    margin-left: 12px;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    font-family: Jua, sans-serif;
    font-size: 26px;
    margin-left: 12px;
  }
`;

export { CardTitleText, CardTitleTextSpan };
