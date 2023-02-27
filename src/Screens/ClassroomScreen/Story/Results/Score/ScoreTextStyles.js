import styled from "styled-components";

const ScoreTextString = styled.p`
  @media (width <= 767px), (height <= 479px) {
    font-size: 36px;
    font-family: Jua, sans-serif;
    color: ${(props) => props.textColor};
    margin-left: 26px;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-size: 36px;
    font-family: Jua, sans-serif;
    color: ${(props) => props.textColor};
    margin-left: 26px;
  }

  @media (width >= 993px) and (height >= 768px) {
    font-size: 36px;
    font-family: Jua, sans-serif;
    color: ${(props) => props.textColor};
    margin-left: 26px;
  }
`;

export { ScoreTextString };
