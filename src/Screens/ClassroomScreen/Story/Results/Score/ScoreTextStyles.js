import styled from "styled-components";

const ScoreTextString = styled.p`
  @media (width <= 767px) {
    font-size: 32px;
    font-family: Jua, sans-serif;
    color: ${(props) => props.textColor};
    margin-left: 26px;
  }

  @media (768px <= width <= 992px) {
    font-size: 36px;
    font-family: Jua, sans-serif;
    color: ${(props) => props.textColor};
    margin-left: 26px;
  }

  @media (width >= 993px) {
    font-size: 36px;
    font-family: Jua, sans-serif;
    color: ${(props) => props.textColor};
    margin-left: 26px;
  }
`;

export { ScoreTextString };
