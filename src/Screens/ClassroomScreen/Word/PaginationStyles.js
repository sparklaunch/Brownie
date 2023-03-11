import styled from "styled-components";

const PaginationText = styled.div`
  @media screen and (max-width: 767px) {
    color: white;
    font-size: 28px;
    letter-spacing: 3px;
    width: 120px;
    text-align: center;
    padding: 14px 0;
    font-weight: bolder;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    color: white;
    font-size: 28px;
    letter-spacing: 3px;
    width: 120px;
    text-align: center;
    padding: 14px 0;
    font-weight: bolder;
  }

  @media screen and (min-width: 993px) {
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
  @media screen and (max-width: 767px) {
    font-weight: normal;
    font-size: 20px;
    color: white;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-weight: normal;
    font-size: 20px;
    color: white;
  }

  @media screen and (min-width: 993px) {
    font-weight: normal;
    font-size: 20px;
    color: white;
  }
`;

export { PaginationText, PaginationTextSpan };
