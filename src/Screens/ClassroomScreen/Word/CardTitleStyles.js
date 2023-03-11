import styled from "styled-components";

const CardTitleText = styled.div`
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 18px;
  }

  @media screen and (min-width: 993px) {
    font-size: 18px;
  }
`;

const CardTitleTextSpan = styled.span`
  @media screen and (max-width: 767px) {
    font-family: Jua, sans-serif;
    font-size: 26px;
    margin-left: 12px;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-family: Jua, sans-serif;
    font-size: 26px;
    margin-left: 12px;
  }

  @media screen and (min-width: 993px) {
    font-family: Jua, sans-serif;
    font-size: 26px;
    margin-left: 12px;
  }
`;

export { CardTitleText, CardTitleTextSpan };
