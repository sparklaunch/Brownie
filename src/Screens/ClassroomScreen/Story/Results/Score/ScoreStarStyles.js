import styled from "styled-components";

const ScoreStarImage = styled.img`
  @media screen and (max-width: 767px) {
    width: 8px;
    height: 8px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 10px;
    height: 10px;
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    width: 12px;
    height: 12px;
  }
  @media screen and (min-width: 1280px) {
    width: 14px;
    height: 14px;
  }
`;

export { ScoreStarImage };
