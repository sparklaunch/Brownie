import styled from "styled-components";

const ScoreTextString = styled.p`
  @media (width <= 767px) {
    font-size: 14px;
    font-family: Jua, sans-serif;
    color: ${(props) => props.textColor};
    margin-left: 10px;
  }

  @media (768px <= width <= 992px) {
    font-size: 16px;
    font-family: Jua, sans-serif;
    color: ${(props) => props.textColor};
    margin-left: 12px;
  }

  @media (993px <= width <= 1279px) {
    font-size: 20px;
    font-family: Jua, sans-serif;
    color: ${(props) => props.textColor};
    margin-left: 16px;
  }
  @media (width >= 1280px) {
    font-size: 27px;
    font-family: Jua, sans-serif;
    color: ${(props) => props.textColor};
    margin-left: 26px;
  }
`;

export { ScoreTextString };
