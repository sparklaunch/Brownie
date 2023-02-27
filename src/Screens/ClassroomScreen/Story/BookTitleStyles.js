import styled from "styled-components";

const BookTitleText = styled.p`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-size: 18px;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    font-size: 18px;
  }
`;

const BookTitleTextSpan = styled.span`
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

export { BookTitleText, BookTitleTextSpan };
