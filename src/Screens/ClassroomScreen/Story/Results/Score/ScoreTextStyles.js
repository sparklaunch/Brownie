import styled from "styled-components";

const ScoreTextString = styled.p`
  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 36px;
    font-family: Jua, sans-serif;
    color: ${(props) => props.textColor};
    margin-left: 26px;
  }
  @media (min-width: 993px) {
    font-size: 36px;
    font-family: Jua, sans-serif;
    color: ${(props) => props.textColor};
    margin-left: 26px;
  }
`;

export { ScoreTextString };
