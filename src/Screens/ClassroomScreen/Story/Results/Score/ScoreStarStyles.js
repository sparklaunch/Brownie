import styled from "styled-components";

const ScoreStarImage = styled.img`
  @media (width <= 767px) {
    width: 16px;
    height: 16px;
  }

  @media (768px <= width <= 992px) {
    width: 18px;
    height: 18px;
  }

  @media (993px <= width <= 1279px) {
    width: 22px;
    height: 22px;
  }
  @media (width >= 1280px) {
    width: 26px;
    height: 26px;
  }
`;

export { ScoreStarImage };
