import styled from "styled-components";

const BookTitleText = styled.p`
  @media (width <= 767px), (height <= 479px) {
    font-size: 18px;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-size: 18px;
  }

  @media (width >= 993px) and (height >= 768px) {
    font-size: 18px;
  }
`;

const BookTitleTextSpan = styled.span`
  @media (width <= 767px), (height <= 479px) {
    font-family: Jua, sans-serif;
    font-size: 26px;
    margin-left: 12px;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-family: Jua, sans-serif;
    font-size: 26px;
    margin-left: 12px;
  }

  @media (width >= 993px) and (height >= 768px) {
    font-family: Jua, sans-serif;
    font-size: 26px;
    margin-left: 12px;
  }
`;

export { BookTitleText, BookTitleTextSpan };
