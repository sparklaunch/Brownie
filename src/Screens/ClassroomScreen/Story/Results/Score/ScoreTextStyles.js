import styled from "styled-components";

const ScoreTextString = styled.p`
  @media screen and (max-width: 767px) {
    font-size: 14px;
    font-family: Jua, sans-serif;
    color: ${(props) => props.textColor};
    margin-left: 8px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 18px;
    font-family: Jua, sans-serif;
    color: ${(props) => props.textColor};
    margin-left: 10px;
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    font-size: 20px;
    font-family: Jua, sans-serif;
    color: ${(props) => props.textColor};
    margin-left: 12px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 22px;
    font-family: Jua, sans-serif;
    color: ${(props) => props.textColor};
    margin-left: 14px;
  }
`;

export { ScoreTextString };
