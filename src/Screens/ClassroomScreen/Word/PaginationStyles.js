import styled from "styled-components";

const PaginationText = styled.div`
  @media (width <= 767px), (height <= 479px) {
    color: white;
    font-size: 28px;
    letter-spacing: 3px;
    width: 120px;
    text-align: center;
    padding: 14px 0;
    font-weight: bolder;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    color: white;
    font-size: 28px;
    letter-spacing: 3px;
    width: 120px;
    text-align: center;
    padding: 14px 0;
    font-weight: bolder;
  }

  @media (min-width: 993px) and (min-height: 768px) {
    color: white;
    font-size: 28px;
    letter-spacing: 3px;
    width: 120px;
    text-align: center;
    padding: 14px 0;
    font-weight: bolder;
  }
`;

const PaginationTextSpan = styled.span`
  @media (width <= 767px), (height <= 479px) {
    font-weight: normal;
    font-size: 20px;
    color: white;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-weight: normal;
    font-size: 20px;
    color: white;
  }

  @media (min-width: 993px) and (min-height: 768px) {
    font-weight: normal;
    font-size: 20px;
    color: white;
  }
`;

export { PaginationText, PaginationTextSpan };
