import styled from "styled-components";

const BookTitleText = styled.p`
  @media (width <= 767px) {
    font-size: 18px;
  }

  @media (768px <= width <= 992px) {
    font-size: 18px;
  }

  @media (width >= 993px) {
    font-size: 18px;
  }
`;

const BookTitleTextSpan = styled.span`
  @media (width <= 767px) {
    font-family: Jua, sans-serif;
    font-size: 26px;
    margin-left: 12px;
  }

  @media (768px <= width <= 992px) {
    font-family: Jua, sans-serif;
    font-size: 26px;
    margin-left: 12px;
  }

  @media (width >= 993px) {
    font-family: Jua, sans-serif;
    font-size: 26px;
    margin-left: 12px;
  }
`;

export { BookTitleText, BookTitleTextSpan };
