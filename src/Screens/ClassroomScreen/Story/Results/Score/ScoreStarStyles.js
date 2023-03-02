import styled from "styled-components";

const ScoreStarImage = styled.img`
  @media (width <= 767px) {
    width: 8px;
    height: 8px;
  }
  @media (768px <= width <= 992px) {
    width: 10px;
    height: 10px;
  }
  @media (993px <= width <= 1279px) {
    width: 12px;
    height: 12px;
  }
  @media (width >= 1280px) {
    width: 14px;
    height: 14px;
  }
`;

export { ScoreStarImage };
